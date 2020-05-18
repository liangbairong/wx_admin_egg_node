'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/common/login', controller.common.login);
  router.post('/common/logout', controller.common.logout);
  router.post('/upload/head', controller.upload.head); // 上传头像
  router.get('/user/get', controller.needToken.user.get); // 获取用户信息
  router.post('/user/update', controller.needToken.user.update); // 修改用户信息

  // 获取数据库的书籍
  router.get('/book/list', controller.book.list);

  // 爬虫搜索
  router.get('/reptileBook/search', controller.reptileBook.search);
  router.post('/reptileBook/addBookList', controller.reptileBook.addBookList); // 添加把书籍添加进数据库

  // router.get('/getDirectory', controller.book.getDirectory);
};
