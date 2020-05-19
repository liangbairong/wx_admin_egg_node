'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const nanoid = require('nanoid');

// 起点
class ReptileBookController extends Controller {
  // 爬虫获取书籍列表,插入数据库books
  async search() {
    const { ctx, app } = this;

    const bookSource = ctx.query.bookSource; // 来源
    const bookName = ctx.query.bookName;
    if (!bookName) {
      app.throwError(400, '请输入搜索内容');
    }
    console.log(app.config.CONST);
    const result = await ctx.curl(`${app.config.CONST.BOOK_SOURCE_MAP[1].url}/search?kw=${bookName}`);
    const html = iconv.decode(result.res.data, 'UTF-8');
    const $ = cheerio.load(html);
    const arrays = [];
    await $('#result-list .res-book-item').each(async function(index) {
      console.log(index);
      const url = 'https:' + $(this).find('a').eq(0)
        .attr('href');
      const bookName = $(this).find('.book-mid-info h4').text();
      const bookId = nanoid();
      const obj = {
        bookId,
        bookImage: $(this).find('.book-img-box img').attr('src'),
        author: $(this).find('.author .name').text(),
        bookName,
        content: $(this).find('.intro').text(),
        bookSourceUrl: url,
        bookSource: 1,
      };
      arrays.push(obj);
    });
    ctx.body = {
      code: 200,
      data: arrays,
      total: arrays.length || 0,
      msg: '',
    };
  }
  // 添加把书籍添加进数据库
  async addBookList() {
    const { ctx, app } = this;
    const query = ctx.request.body;
    const book = query.book;
    const isHas = await app.mysql.select('books', { where: { bookName: book.bookName } });
    if (isHas.length !== 0) {
      app.throwError(400, '书籍已存在');
    }
    const result = await app.mysql.insert('books', book);
    if (result.affectedRows !== 1) {
      app.throwError(500, '数据库插入失败');
    }
    ctx.body = {
      code: 200,
      data: '',
      msg: '',
    };
  }
  // 获取一本书的目录
  async addBookDiretory() {
    const { ctx } = this;
    const query = ctx.request.body;
    const result = await ctx.curl(query.bookSourceUrl);
    const html = iconv.decode(result.res.data, 'UTF-8');
    const $ = cheerio.load(html);
    const arrays = [];
    const conn = await ctx.app.mysql.beginTransaction(); // 初始化事务
    await new Promise(succ => {
      const li = $('.volume-wrap li');
      (async () => {
        for (let i = 0; i < li.length; i++) {
          const bookContentUrl = 'https:' + li.eq(i).find('a').attr('href');
          const directoryTitle = li.eq(i).find('a').text();
          const result2 = await ctx.curl(bookContentUrl);
          const htmlContent = iconv.decode(result2.res.data, 'UTF-8');
          const $content = cheerio.load(htmlContent);
          const directoryId = nanoid();
          const obj = {
            bookContentUrl,
            directoryId,
            bookId: query.bookId,
            directoryTitle,
          };
          const bookConent = {
            directoryId,
            bookId: query.bookId,
            bookContent: $content('.read-content').html(),
          };
          arrays.push(obj);
          console.log(i);

          try {
            const isHas = await conn.select('directory', { where: { bookContentUrl } });
            if (isHas.length === 0) {
              await conn.insert('directory', obj); // 第一步操作
              await conn.insert('book_conent', bookConent); // 第一步操作
            }
          } catch (err) {
            await conn.rollback(); // 一定记得捕获异常后回滚事务！！
            throw err;
          }
          if (i === li.length - 1) { succ(arrays); }
        }
      })();
    });
    await conn.commit(); // 提交事务

    ctx.body = {
      code: 200,
      data: arrays,
      msg: '',
    };


  }

}

module.exports = ReptileBookController;
