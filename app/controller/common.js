'use strict';
const jwt = require('jsonwebtoken');
const Controller = require('egg').Controller;
class CommonController extends Controller {
  // 登陆
  async login() {
    const { ctx, app } = this;
    const query = ctx.request.body;
    const option = {
      account: query.account,
      password: query.password,
    };
    if (!query.account) {
      app.throwError(400, '账号不能为空');
    }
    if (!query.password) {
      app.throwError(400, '密码不能为空');
    }
    const user = await ctx.service.user.get(option);
    if (!user) {
      app.throwError(400, '账号密码错误');
    }
    const content = { name: user.userId }; // 要生成token的主题信息
    const secretOrPrivateKey = app.config.keys; // 这是加密的key（密钥）
    const token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 1, // 1小时过期
    });
    const result = await ctx.service.user.update({ token }, {
      userId: user.userId,
    });
    if (result) {
      ctx.body = {
        code: 200,
        data: token,
      };
    }
  }
  // 退出登陆
  async logout() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization;
    if (!token) {
      app.throwError(400, '需要token');
    }
    const user = await ctx.service.user.get({
      token,
    });
    if (!user) {
      app.throwError(400, '账号不存在');
    }

    const result = await ctx.service.user.update({ token: '' }, {
      userId: user.userId,
    });
    if (result) {
      ctx.body = {
        code: 200,
        data: '',
      };
    }

  }

}

module.exports = CommonController;
