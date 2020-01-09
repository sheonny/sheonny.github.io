/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-01-02 14:22:53
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-02 15:09:06
 */
const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:3001',
  changeOrigin:false,
  pathRewrite: {
    "^/api": "/" // 把/api 变成空
}
}));
  // app.use(proxy(‘/test‘, { target: ‘http://localhost:3000‘ }));
  // 省略...
};