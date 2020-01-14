

'use strict';
module.exports = () => {
  return async function httpError(ctx, next) {
    try {
      await next();
    } catch (err) {
      console.log(err);
      if (err.msg) {
        ctx.body = {
          code: err.code,
          data: '',
          msg: err.msg,
        };
      } else {
        ctx.body = {
          code: 500,
          data: '',
          msg: '服务器内部错误：' + err,
        };
        ctx.status = 500;
      }

    }
  };
};
