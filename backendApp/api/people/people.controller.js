//TODO import the service 

async function getPeopleList(req, res, next) {
    try {
      // TODO call the service
      res.send('Hello world :)');
    } catch (err) {
      next(err);
    }
}

module.exports = { getPeopleList };