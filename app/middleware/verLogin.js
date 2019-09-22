'use strict';
const jwt = require('jsonwebtoken');
module.exports = () => {
  return async function verLogin(ctx, next) {
    if (ctx.request.header.authorization) {
      const token = ctx.request.header.authorization;
      // let decoded = '';
      // 解码token
      try {
        jwt.verify(token, 'sssss');
        // console.log(decoded);
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
          console.log('时间到期');
          ctx.body = {
            code: 3000,
            msg: 'token时间到期',
          };
          return;
        }
        ctx.body = {
          code: 3000,
          msg: 'token失效',
        };
        return;
      }
      await next();
    } else {
      ctx.body = {
        code: 3000,
        msg: '没有token',
      };
      return;
    }

  };
};
