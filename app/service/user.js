'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  // 获取信息
  async get(param) {
    const { ctx } = this;
    const user = await ctx.app.mysql.get('user', param);
    return user;
  }
  // 修改user  param ={}  修改的参数  where={} 修改的条件
  async update(param, where) {
    const { ctx } = this;
    const options = {
      where,
    };
    const result = await ctx.app.mysql.update('user', {
      ...param,
    }, options);
    if (result.affectedRows === 1) {
      return true;
    }
    return false;
  }
}

module.exports = UserService;
