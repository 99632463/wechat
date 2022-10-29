const { access_token } = require('../../../config/config');
const { http: { prefix } } = require('../../../config/config');

const Ajax = require('../..');
const ajax = new Ajax();

const setIndustry = query => {
  return ajax.post(`xxxxx`, query);
}

module.exports = {
  setIndustry
}