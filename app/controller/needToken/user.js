'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserInfo() {
    const { ctx } = this;
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
    ctx.body = {
      code: 400,
      data: '',
      msg: '用户不存在',
    };
  }

  // 修改用户信息
  async updateUserInfo() {
    const { ctx } = this;
    const token = ctx.request.header.authorization;
    const query = this.ctx.request.body;
    if (!query.name) {
      ctx.body = {
        code: 400,
        data: '',
        msg: 'name不能为空',
      };
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
    ctx.body = {
      code: 400,
      data: '',
      msg: '修改失败',
    };
  }

}

module.exports = UserController;
