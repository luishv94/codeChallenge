const peopleService = require('../../lib/peopleService');

async function getPeopleList(req, res, next) {
    try {
      const data = await peopleService.getPeopleList();
      res.send(data);
    } catch (err) {
      next(err);
    }
}

module.exports = { getPeopleList };