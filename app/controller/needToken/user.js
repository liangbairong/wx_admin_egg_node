'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async get() {
    const { ctx } = this;
    console.log(this.app.config.keys);
    const token = ctx.request.header.authorization;

    const data = await ctx.service.user.get({ token });
    if (data) {
      ctx.body = {
        code: 200,
        data,
        msg: '',
      };
      return;
    }
    this.app.throwError(400, '用户不存在');
  }

  // 修改用户信息
  async update() {
    const { ctx } = this;
    const token = ctx.request.header.authorization;
    const query = this.ctx.request.body;
    if (!query.name) {
      this.app.throwError(400, 'name不能为空');
      return;
    }
    const result = await ctx.service.user.update({
      name: query.name,
    }, {
      token,
    });
    if (result) {
      ctx.body = {
        code: 200,
        data: '',
        msg: '',
      };
      return;
    }
    this.app.throwError(400, '修改失败');
  }

}

module.exports = UserController;
