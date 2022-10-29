const sha1 = require("sha1");
const { Parser, Builder } = require('xml2js');

const connection = module.exports = {};

connection.configuration = function (ctx) {
  const { signature, timestamp, nonce, echostr } = ctx.query;
  const process = [this.token, timestamp, nonce].sort().join('');
  const result = sha1(process);

  result === signature ? ctx.body = echostr : ctx.body = 'mismatch';
}

connection.msgHandler = function (msgbufer) {
  const parser = new Parser({ trim: true, explicitArray: false, explicitRoot: false });
  const builder = new Builder({ headless: true, cdata: true, explicitRoot: false, rootName: 'xml' });

  return new Promise((resolve, reject) => {
      parser.parseString(msgbufer && msgbufer.toString(), async (err, result) => {
        if (err) {
          reject({
            code: -1,
            msg: 'error',
            data: err,
          });
        }

        const baseData = {
          ToUserName: result.FromUserName,
          FromUserName: result.ToUserName,
          CreateTime: Date.now(),
        }
 
        if(result.MsgType === 'text'){
          // let xmlContent = "<xml><ToUserName><![CDATA["+ baseData.ToUserName +"]]></ToUserName>";
          // xmlContent += "<FromUserName><![CDATA["+ baseData.FromUserName +"]]></FromUserName>";
          // xmlContent += "<CreateTime>"+ new Date().getTime() +"</CreateTime>";
          // xmlContent += "<MsgType><![CDATA[text]]></MsgType>";
          // xmlContent += "<Content><![CDATA["+ content +"]]></Content></xml>";
          // resolve(xmlContent);

          const data = Object.assign({
            MsgType: 'text',
            Content: '你好',
          }, baseData);
  
          resolve(builder.buildObject(data));
        }
     });
  });
}

connection.receiveUserMessage = async function (ctx) {
  const buffer = [];
  
  ctx.req.on('data', data => {
    buffer.push(data);
  });

  const message = new Promise(resolve => {
    ctx.req.on('end', async () => {
      const result = await this.msgHandler(buffer);
      resolve(result);
    });
  })

  ctx.body = await message;
}