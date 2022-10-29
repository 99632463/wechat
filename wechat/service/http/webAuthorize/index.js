const { appID, appsecret } = require('../../../config.json');
const { http: { prefix } } = require('../../../config/config');

const Ajax = require('../..');
const ajax = new Ajax();

const getAuthorizeAfterAccessToken = async code => {
  const promise = ajax.get(`xxxxxx`)
  const { access_token } = await promise;

  return access_token && promise;
}

const refreshAccessToken = refresh_token => {
  return ajax.get(`xxxxxx`);
}

const inspectAccessToken = (access_token, openid) => {
  return ajax.get(`xxxxx`);
}

const getUserInfo = (access_token, openid) => {
  return ajax.get(`xxxxxxx`);
}

const getJsapi_ticket = (access_token = '') => {
  return ajax.get(`xxxxx`);
}

module.exports = {
  getAuthorizeAfterAccessToken,
  refreshAccessToken,
  inspectAccessToken,
  getUserInfo,
  getJsapi_ticket
}