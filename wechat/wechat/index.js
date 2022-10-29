const { isObject, mixin } = require('../util/base');
const connection = require('./connection');
const menu = require('./menu');
const webAuthorize = require('./webAuthorize');
const templateMsg = require('./templateMsg');

class Wechat {
  constructor(config) {
    if (!(this instanceof Wechat)) {
      throw new Error('Wechat must use `new`');
    }
    if (!isObject(config)) {
      throw new TypeError('this param is must be object !');
    }

    const { appID, appsecret, token = '' } = config;

    this.appID = appID;
    this.appsecret = appsecret;
    this.token = token;

    this.init();
  }
}

Wechat.prototype.init = function () {
  const modules = [connection, menu, webAuthorize, templateMsg];

  modules.forEach(singleModule => {
    mixin(Wechat.prototype, singleModule)
  })

  mixin(this, Wechat.prototype);
}

module.exports = Wechat;