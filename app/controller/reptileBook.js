'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const nanoid = require('nanoid');
class ReptileBookController extends Controller {
  // 爬虫获取书籍列表,插入数据库books
  async search() {
    const { ctx } = this;
    const result = await ctx.curl('https://www.qidian.com/search?kw=火影');
    const html = iconv.decode(result.res.data, 'UTF-8');
    const $ = cheerio.load(html);
    const arrays = [];
    // const conn = await ctx.app.mysql.beginTransaction(); // 初始化事务
    await $('#result-list .res-book-item').each(async function(index) {
      console.log(index);
      const url = $(this).find('a').eq(0)
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
      // try {
      //   const isHas = await conn.select('books', { where: { bookName } });
      //   if (isHas.length === 0) {
      //     await conn.insert('books', obj); // 第一步操作
      //     await this.getDirectory(url, bookId);
      //   }
      // } catch (err) {
      //   await conn.rollback(); // 一定记得捕获异常后回滚事务！！
      //   throw err;
      // }
      arrays.push(obj);
    });
    // await conn.commit(); // 提交事务
    // return arrays;
    console.log(arrays);
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
    // const option = {
    //   account: query.account,
    //   password: query.password,
    // };
    const book = query.book;
    console.log(book);
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

}

module.exports = ReptileBookController;
