
'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1568685835614_3976';
  config.middleware = [];
  // 全局常量
  config.CONST = {
    ROOT: 'ss',
    UPLOAD_URL: 'http://127.0.0.1:7001',
    BOOK_SOURCE_MAP: {
      1: {
        url: 'https://www.qidian.com',
        name: '起点',
      },
    },
  };
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
  config.middleware = [ 'httpError', 'verLogin' ];
  config.httpError = {
    match: '/',
  };
  config.verLogin = {
    match: '/need_token',
  };
  // 跨域配置
  config.cors = {
    origin: [ '*' ],
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
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
  // 定时任务打印日志 修改日志路径
  // config.customLogger = {
  //   scheduleLogger: {
  //     // consoleLevel: 'NONE',
  //     // file: path.join(appInfo.root, 'logs', appInfo.name, 'egg-schedule.log'),
  //   },
  // };
  // config.serverTimeout = 20000;
  return {
    ...config,
    ...userConfig,
  };
};

