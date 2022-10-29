const Router = require('koa-router');
const { createMenu } = require('../../../service/http/menu');

const router = new Router();

router.get('/create', async ctx => {
})

module.exports = router.routes();