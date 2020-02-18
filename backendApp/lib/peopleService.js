const rp = require('request-promise-native');

async function getPeopleList() {
    try {
      const reqOptions = {
        url: process.env.SALESLOFT_API_PEOPLE,
        headers: {
          Authorization: `Bearer ${process.env.KEY}`
        },
        json: true
      };

      const response = await rp.get(reqOptions);
      const result = response.data;

      return result;
      
    } catch (err) {
        throw err;
    }
}

module.exports = { getPeopleList };