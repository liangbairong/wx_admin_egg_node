'use strict';
const jwt = require('jsonwebtoken');
module.exports = () => {
  return async function verLogin(ctx, next) {
    const token = ctx.request.header.authorization;
    if (token) {
      // 解码token
      try {
        jwt.verify(token, ctx.app.config.keys);
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
          ctx.app.throwError(3000, 'token时间到期');
        }
        ctx.app.throwError(3000, 'token失效');
      }
      await next();
    } else {
      ctx.app.throwError(3000, '没有token');
    }

  };
};
