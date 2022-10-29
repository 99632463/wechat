const Router = require('koa-router');
const router = new Router();

const paths = [
  { match: '/connection', to: './connection' },
  { match: '/menu', to: './menu' },
  { match: '/auth', to: './webAuthorize' },
  { match: '/templateMsg', to: './templateMsg' },
];

paths.forEach(path => {
  router.use(path.match, require(path.to));
})

module.exports = router.routes();