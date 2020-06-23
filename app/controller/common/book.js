'use strict';
const Controller = require('egg').Controller;
class BookController extends Controller {
  /**
   * 接口描述：获取书籍列表
   * 请求方式：get
   * 参数：{
   *          bookName:''  //书籍名称
   *       }
   */
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
      sss: app.config.CONST2,
    };
  }
  /**
   * 接口描述：获取详情
   * 请求方式：get
   * 参数：{
   *        bookId:'12121'   //书本id
   *       }
   */
  async details() {
    const { ctx, app } = this;
    const bookId = ctx.query.bookId;
    const data = await app.mysql.get('books', { bookId });
    ctx.body = {
      code: 200,
      data,
      msg: '',
    };
  }
  /**
   * 接口描述：获取目录
   * 请求方式：get
   * 参数：{
   *        bookId:'12121' //书本id
   *       }
   */
  async directory() {
    const { ctx, app } = this;
    const bookId = ctx.query.bookId;
    const list = await app.mysql.select('directory', {
      where: { bookId }, // WHERE 条件
    });
    console.log(list);
    ctx.body = {
      code: 200,
      data: list,
      msg: '',
    };
  }
  /**
   * 接口描述：获取内容
   * 请求方式：get
   * 参数：{
   *        directoryId:'12121'  //目录id
   *       }
   */
  async content() {
    const { ctx, app } = this;
    const directoryId = ctx.query.directoryId;
    // const data = await app.mysql.get('book_conent', { directoryId });
    const data = await app.mysql.query(`SELECT * FROM book_conent,directory WHERE book_conent.directoryId=directory.directoryId and book_conent.directoryId="${directoryId}"`);

    ctx.body = {
      code: 200,
      data: data[0],
      msg: '',
    };
  }

  /**
   * 接口描述： 删除书籍
   * 请求方式：post
   * 参数：{
   *        bookId:'12121'  //书本id
   *       }
   */
  async deleteBook() {
    const { ctx, app } = this;
    const bookId = ctx.request.body.bookId;
    if (!bookId) {
      app.throwError(400, 'bookId不能为空');
    }
    const result = await app.mysql.query(`delete a,b,c from books as a join
    directory as b on a.bookId = b.bookId join
    book_conent as c on a.bookId = c.bookId where a.bookId
    ="${bookId}"`);
    // if (result.affectedRows !== 1) {
    //   app.throwError(500, '数据库插入失败');
    // }
    console.log(result);
    ctx.body = {
      code: 200,
      data: '',
      msg: '',
    };

  }

}

module.exports = BookController;
