
/**
 * 爬虫
 */

'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const nanoid = require('nanoid');
class reptileService extends Service {
  constructor(props) {
    super(props);
    this.index = 0;
  }
  mkdir(dir, cb) {
    const pathinfo = path.parse(dir);
    if (!fs.existsSync(pathinfo.dir)) {
      this.mkdir(pathinfo.dir, function() {
        fs.mkdirSync(pathinfo.dir);
      });
    }
    cb && cb();
  }

  // 获取
  async getBooks(bookUrl) {
    const { ctx } = this;
    const result = await ctx.curl(bookUrl);
    const html = iconv.decode(result.res.data, 'UTF-8');
    const $ = cheerio.load(html);
    const arrays = [];
    const conn = await ctx.app.mysql.beginTransaction(); // 初始化事务
    await $('#container .item-img').each(async function(index) {
      console.log(index);
      const a = $(this).find('a').eq(0);
      const bookName = $(this).find('h5').text();
      const url = $(this).find('h5').text();
      const bookId = nanoid();
      const obj = {
        bookId,
        bookImage: bookUrl + a.find('img').attr('src'),
        bookUrl: url,
        // author: $(this).text(),
        bookName,
        content: $(this).find('p').text(),
      };
      try {
        const isHas = await conn.select('books', { where: { bookName } });
        if (isHas.length === 0) {
          await conn.insert('books', obj); // 第一步操作
          await this.getDirectory(url, bookId);
        }
      } catch (err) {
        await conn.rollback(); // 一定记得捕获异常后回滚事务！！
        throw err;
      }
      arrays.push(obj);
    });
    await conn.commit(); // 提交事务
    return arrays;
  }
  // 获取目录
  async getDirectory(bookUrl, bookId) {
    const { ctx } = this;
    const result = await ctx.curl(bookUrl);
    const html = iconv.decode(result.res.data, 'UTF-8');
    console.log(html);
    const $ = cheerio.load(html);
    const conn = await ctx.app.mysql.beginTransaction(); // 初始化事务
    const directoryTitle = $(this).text();
    await $('#main a').each(async function() {
      const obj = {
        directoryTitle,
        url: bookUrl + $(this).attr('href'),
        bookId,
      };
      try {
        const isHas = await conn.select('directory', { where: { directoryTitle } });
        if (isHas.length === 0) {
          await conn.insert('directory', obj);
        }
      } catch (err) {
        await conn.rollback();
        throw err;
      }
    });
    await conn.commit(); // 提交事务
    // this.mkdir(path.join(__dirname, '/book/meiruz/di/'));
  }
  async main(data) {
    if (this.index <= data.length - 1) {
      this.insertBookDatabase(data[this.index]);
    }
  }

  async insertBookDatabase(data) {
    const { ctx } = this;
    if (this.index <= data.length - 1) {
      console.log(this.index);
      const conn = await ctx.app.mysql.beginTransaction(); // 初始化事务
      try {
        const isHas = await conn.select('books', { where: { bookName: data[this.index].bookName } });
        if (isHas.length === 0) {
          await conn.insert('books', data[this.index]); // 第一步操作
        }
      } catch (err) {
        await conn.rollback(); // 一定记得捕获异常后回滚事务！！
        throw err;
      }
      await conn.commit(); // 提交事务
      this.index++;

      this.insertBookDatabase(data);
    }

  }


}

module.exports = reptileService;
