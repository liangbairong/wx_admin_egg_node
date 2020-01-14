'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/common/login', controller.common.login);
  router.post('/common/logout', controller.common.logout);
  router.post('/upload/head', controller.upload.head); // 上传头像
  router.get('/need_token/user/get', controller.needToken.user.get); // 获取用户信息
  router.post('/need_token/user/update', controller.needToken.user.update);


  // router.get('/getDirectory', controller.book.getDirectory);
};
