
/**
 * 爬虫
 */

'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const nanoid = require('nanoid');
class reptileService extends Service {
  constructor(props) {
    super(props);
    this.index = 0;
  }


  // 根据url爬取目录和内容插入数据库  起点
  async getBookContent(query) {
    const { ctx } = this;
    const result = await ctx.curl(query.bookSourceUrl);
    const html = iconv.decode(result.res.data, 'UTF-8');
    const $ = cheerio.load(html);
    const arrays = [];
    const conn = await ctx.app.mysql.beginTransaction(); // 初始化事务
    await new Promise(succ => {
      const li = $('.volume-wrap li');
      (async () => {
        for (let i = 0; i < li.length; i++) {
          const bookContentUrl = 'https:' + li.eq(i).find('a').attr('href');
          const directoryTitle = li.eq(i).find('a').text();
          const result2 = await ctx.curl(bookContentUrl);
          const htmlContent = iconv.decode(result2.res.data, 'UTF-8');
          const $content = cheerio.load(htmlContent);
          const directoryId = nanoid();
          const obj = {
            bookContentUrl,
            directoryId,
            bookId: query.bookId,
            directoryTitle,
          };
          const bookConent = {
            directoryId,
            bookId: query.bookId,
            bookContent: $content('.read-content').html(),
          };
          arrays.push(obj);
          console.log(i);

          try {
            const isHas = await conn.select('directory', { where: { bookContentUrl } });
            if (isHas.length === 0) {
              await conn.insert('directory', obj); // 第一步操作
              await conn.insert('book_conent', bookConent); // 第一步操作
            }
          } catch (err) {
            await conn.rollback(); // 一定记得捕获异常后回滚事务！！
            throw err;
          }
          if (i === li.length - 1) { succ(arrays); }
        }
      })();
    });
    await conn.commit(); // 提交事务
    console.log(query.bookName + '---更新完成');
  }


}

module.exports = reptileService;
