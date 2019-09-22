/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568685835614_3976';
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '1234567890',
      // 数据库名
      database: 'wx',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 报错处理
  config.onerror = {
    errorPageUrl: (err, ctx) => ctx.errorPageUrl || '/500',
    json: (err, ctx) => {
      ctx.body = {
        code: err.status,
        msg: err.message,
      };
    },
  };
  // 中间件
  config.middleware = [ 'accessControl', 'verLogin' ];
  config.accessControl = {
    match: '/',
  };
  config.verLogin = {
    match: '/needToken',
  };
  // 跨域配置
  config.cors = {
    origin: [ 'http://localhost:8082' ],
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };
  config.security = {
    // csrf: false,
    csrf: {
      enable: false, // 前后端分离，post请求不方便携带_csrf
      ignoreJSON: true,
      headerName: 'authorization',
    },
    methodnoallow: {
      enable: false,
    },

  };
  // 上传文件
  config.multipart = {
    mode: 'stream',
  };


  return {
    ...config,
    ...userConfig,
  };
};

