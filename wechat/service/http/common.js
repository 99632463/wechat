const { http: { prefix } } = require('../../config/config');

const Ajax = require('..');
const ajax = new Ajax();

const getAccessToken = (appID, appsecret) => {
  return ajax.get(`xxxxxxx`);
}

module.exports = {
  getAccessToken
}