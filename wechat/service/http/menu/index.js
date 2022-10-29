const { access_token } = require('../../../config/config');
const { http: { prefix } } = require('../../../config/config');

const Ajax = require('../..');
const ajax = new Ajax();

const createMenu = params => {
  return ajax.post(`xxxxx`, params);
}

module.exports = {
  createMenu
}