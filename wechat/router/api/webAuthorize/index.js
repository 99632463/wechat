const Router = require('koa-router');
const Wechat = require('../../../wechat');
const config = require('../../../config.json');
const { getJsapi_ticket } = require('../../../service/http/webAuthorize');
const { access_token } = require('../../../config/config');

const router = new Router();
const wechat = new Wechat(config);

router.get('/redirect', async ctx => {
  const { appID } = config;
  const promise = await Promise.all([wechat.getUserInfo(ctx), getJsapi_ticket(access_token)]);

  await ctx.render('jssdk', {
    appID,
    userInfo: promise[0] || {},
    jsapi_ticket: promise[1].ticket || ''
  });
})

module.exports = router.routes();