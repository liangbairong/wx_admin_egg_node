'use strict';
const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class UserController extends Controller {
  /**
   * 接口描述：后台登录
   * 请求方式：post
   * 参数：{
   *          account:string  //账号
   *          password:string  //密码
   *       }
   *  header：authorization
   */
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
  /**
   * 接口描述：退出登陆
   * 请求方式：post
   * 参数：{}
   * header：authorization
   */
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
