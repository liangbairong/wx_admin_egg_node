'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/admin/user/login', controller.admin.user.login);
  router.post('/admin/user/logout', controller.admin.user.logout);
  router.get('/admin/user/get', controller.admin.user.get); // 获取用户信息
  router.post('/admin/user/update', controller.admin.user.update); // 修改用户信息
  router.post('/common/upload/head', controller.common.upload.head); // 上传头像
  // 获取数据库的书籍
  router.get('/common/book/list', controller.common.book.list);
  router.get('/common/book/details', controller.common.book.details);
  router.get('/common/book/directory', controller.common.book.directory); // 数据库目录
  router.get('/common/book/content', controller.common.book.content); // 数据库内容
  router.post('/common/book/deleteBook', controller.common.book.deleteBook); // 数据库内容
  // 爬虫搜索
  router.get('/common/reptileBook/search', controller.common.reptileBook.search);
  router.post('/common/reptileBook/addBookList', controller.common.reptileBook.addBookList); // 添加把书籍添加进数据库
  router.post('/common/reptileBook/addBookDiretory', controller.common.reptileBook.addBookDiretory);
};
