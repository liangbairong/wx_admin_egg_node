'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/common/login', controller.common.login);
  router.post('/common/logout', controller.common.logout);
  router.post('/upload', controller.upload.index);
  router.get('/needToken/user/getUserInfo', controller.needToken.user.getUserInfo);
  router.post('/needToken/user/updateUserInfo', controller.needToken.user.updateUserInfo);
};
