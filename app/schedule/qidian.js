'use strict';
const Subscription = require('egg').Subscription;

class Qidian extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: 60 * 60 + 's', // 一个小时间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // updateBooks 是真正定时任务执行时被运行的函数
  async updateBooks() {
    const { ctx, app } = this;
    const list = await app.mysql.select('books');
    list.forEach(item => {
      console.log('起点定时任务');
      ctx.service.reptile.getBookContent(item);
    });
  }
}

module.exports = Qidian;
