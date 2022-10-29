const Router = require('koa-router');
const config = require('../../../config');
const Wechat = require('../../../wechat');

const router = new Router();
const wechat = new Wechat(config);

router.get('/', ctx => {
  wechat.configuration(ctx)
})

router.post('/', ctx => {
  wechat.receiveUserMessage(ctx);
})

module.exports = router.routes();