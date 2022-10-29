const templateMsg = module.exports = {};
const { setIndustry } = require('../../service/http/templateMsg');

templateMsg.setIndustry = async function () {
  const query = {
    "industry_id1": "1",
    "industry_id2": "4",
  }
  const industry = await setIndustry(query);

  console.log('industry: ', industry);
}