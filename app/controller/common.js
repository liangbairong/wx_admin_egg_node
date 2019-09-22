'use strict';
const jwt = require('jsonwebtoken');
const Controller = require('egg').Controller;

class CommonController extends Controller {
  // 登陆
  async login() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: '',
      msg: '',
    };
    const query = this.ctx.request.body;
    const option = {
      account: query.account,
      password: query.password,
    };
    const user = await ctx.service.user.get(option);
    if (user) {
      const content = { name: user.userId }; // 要生成token的主题信息
      const secretOrPrivateKey = 'sssss'; // 这是加密的key（密钥）
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
        return;
      }
      ctx.body = {
        code: 400,
        msg: '数据库错误',
      };
      return;
    }
    ctx.body = {
      code: 400,
      msg: '账号密码错误',
    };
  }
  // 退出登陆
  async logout() {
    const { ctx } = this;
    const token = ctx.request.header.authorization;
    const user = await ctx.service.user.get({
      token,
    });
    if (user) {
      const result = await ctx.service.user.update({ token: '' }, {
        userId: user.userId,
      });
      if (result) {
        ctx.body = {
          code: 200,
          data: 'succ',
          msg: '',
        };
        return;
      }
    }

    ctx.body = {
      code: 400,
      data: '',
      msg: '退出失败',
    };
  }

}

module.exports = CommonController;
