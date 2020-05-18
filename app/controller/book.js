'use strict';
const Controller = require('egg').Controller;
class BookController extends Controller {

  // 获取书籍列表
  async list() {
    const { ctx, app } = this;
    const bookName = ctx.query.bookName;
    const limit = Number(ctx.query.limit) || 10;
    const currentPage = ctx.query.currentPage ? Number((ctx.query.currentPage - 1) * limit) : 0;
    // sql模糊查询
    let bookNameSql = '';
    if (bookName) {
      bookNameSql = `where bookName like "%${bookName}%"`;
    }

    const list = await app.mysql.query(`select SQL_CALC_FOUND_ROWS * from books ${bookNameSql} limit ${currentPage}, ${limit};`);
    // const z = await app.mysql.query('SELECT FOUND_ROWS() as total;');
    const z = await app.mysql.query('SELECT COUNT(id) as total FROM books;');

    console.log(z);
    ctx.body = {
      code: 200,
      data: list,
      total: z[0].total || 0,
      msg: '',
    };
  }
  // 获取目录
  async getDirectory() {
    const { ctx } = this;
    const directory = await ctx.service.reptile.getBooks('https://www.23us.la/');
    // const directory = await ctx.service.reptile.getDirectory('http://book.zongheng.com/showchapter/862408.html');
    ctx.body = {
      code: 200,
      data: {
        bookName: '',
        directory,
      },
      msg: '',
    };
  }

}

module.exports = BookController;
