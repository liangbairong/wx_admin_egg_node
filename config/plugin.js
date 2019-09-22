'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
// 跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
// mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.multipart = {
  enable: true,
};
