const Router = require('koa-router');
const Wechat = require('../../../wechat');
const config = require('../../../config.json');

const router = new Router();
const wechat = new Wechat(config);

router.get('/', ctx => {
  wechat.setIndustry();
})

module.exports = router.routes();