'use strict';
const Controller = require('egg').Controller;
class BookController extends Controller {
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
