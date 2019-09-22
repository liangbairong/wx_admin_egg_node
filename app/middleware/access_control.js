'use strict';
// 设置跨域的中间件
module.exports = () => {
  return async function accessControl(ctx, next) {
    console.log(ctx.request.method);
    await next();
  };
};
