/**
 * user数据库封装
 */

'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  // 获取信息
  async get(param) {
    const { app } = this;
    const user = await app.mysql.get('user', param);
    return user;
  }
  // 修改user  param ={}  修改的参数  where={} 修改的条件
  async update(param, where) {
    const { app } = this;
    const options = {
      where,
    };
    const result = await app.mysql.update('user', {
      ...param,
    }, options);
    if (result.affectedRows !== 1) {
      app.throwError(500, '数据库错误');
    }
    return true;
  }
}

module.exports = UserService;
