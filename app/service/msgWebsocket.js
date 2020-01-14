/**
 * websocket
 */

'use strict';
const Service = require('egg').Service;
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
// 消息中心 websocket
class msgWebsocketService extends Service {
  constructor(props) {
    super(props);
    this.wss = null;
    this.ws = null;
  }
  // 获取信息
  async start() {
    let times = '';
    // 创建 websocket 服务器 监听在 3002 端口
    this.wss = new WebSocketServer({ port: 3002 });
    // 服务器被客户端连接
    this.wss.on('connection', ws => {
      this.ws = ws;
      console.log('WebSocket链接成功');
      this.receive();
      let i = 0;
      this.wss.clients.forEach(client => {
        times = setInterval(() => {
          client.send(i++);
        }, 2000);
      });
    });
    this.wss.on('close', () => {
      console.log('关闭');
      clearInterval(times);
      // this.wss.close();
    });
  }
  // 发送
  // async send(message) {
  //   this.ws.send(message, err => { // send 方法的第二个参数是一个错误回调函数
  //     if (err) {
  //       console.log(`[SERVER] error: ${err}`);
  //       this.wss.close();
  //     }
  //   });
  // }
  // 接收
  async receive() {
    this.ws.on('message', message => {
      console.log(message + 'ss');
    });
  }


}

module.exports = msgWebsocketService;
