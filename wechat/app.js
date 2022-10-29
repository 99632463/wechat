const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-ejs');
const path = require('path');

const app = new Koa();
const router = new Router();

router.use('/api', require('./router/api'));

router.get('/test', ctx => ctx.body = 'hello, 我是首页 ！');

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'jssdk',
  viewExt: 'html',
  cache: false,
  debug: false
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(8082, () => console.log('server is staring....'));