const request = require('request');

class Ajax { }

Ajax.prototype.get = function (url) {
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      err ? reject(Promise.reject()) : resolve(JSON.parse(body));
    })
  })
}

Ajax.prototype.post = function (url, formData = {}) {
  return new Promise((resolve, reject) => {
    request.post({
      url, 
      formData: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }, (err, response, body) => {
      err ? reject(Promise.reject()) : resolve(JSON.parse(body));
    })
  })
}

module.exports = Ajax;