const peopleService = require('../../lib/peopleService');

async function getPeopleList(req, res, next) {
    try {
      let data = await peopleService.getPeopleList();
      res.send(data);
    } catch (err) {
      next(err);
    }
}

module.exports = { getPeopleList };