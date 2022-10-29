const {
  getAuthorizeAfterAccessToken, refreshAccessToken, getUserInfo, inspectAccessToken
} = require('../../service/http/webAuthorize');

const webAuthorize = module.exports = {};

webAuthorize.redirect = async function ({ query }, fn) {
  const { code = '' } = query;
  const { refresh_token } = await getAuthorizeAfterAccessToken(code);
  const { access_token, openid } = await refreshAccessToken(refresh_token);

  const userInfo = getUserInfo(access_token, openid);
  const inspectToken = inspectAccessToken(access_token, openid);
  const result = await Promise.all([userInfo, inspectToken]);

  fn && fn(result[0]);
}

webAuthorize.getUserInfo = async function (ctx) {
  return new Promise(resolve => {
    this.redirect(ctx, userInfo => {
      resolve(userInfo);
    });
  });
}