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
      let result = response.data;
      result = result.map(o => ({
          name: o.display_name,
          email: o.email_address,
          title: o.title
      }));

      return result;

    } catch (err) {
        throw err;
    }
}

module.exports = { getPeopleList };