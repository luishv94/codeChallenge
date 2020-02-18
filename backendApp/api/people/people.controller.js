const peopleService = require('../../lib/peopleService');

async function getFrequencyCount(req, res, next) {
  try {
    const counts = {};
    const objSorted = {};
    //Getting people data.
    const data = await peopleService.getPeopleList();

    //Getting the character counts from each mail and then adding them up.
    data.forEach(e => {
      const strCount = getFrequencyCountByString(e.email);
      addCounts(strCount, counts);
    });

    //Converting the object into array to be able to use the sort method.
    let sortable = [];
    for(let e in counts) {
      sortable.push([e, counts[e]]);
    }

    //Sorting the array.
    sortable.sort((a,b) => {
      return b[1] - a[1];
    });

    //Converting back the array into object.
    sortable.forEach(e => {
      objSorted[e[0]] = e[1];
    });


    res.send(objSorted);
  } catch (err) {
    next(err);
  }
}

//Add the counts from the given object.
function addCounts(strCount, counts) {
  for(let a in strCount) {
    counts[a] = counts[a] ? counts[a] + 1 : 1;
  }
}

//Returns an object with the character counts.
function getFrequencyCountByString(str) {
  const counts = {};
  const strArr = str.split('');
  strArr.forEach(e => {
    counts[e] = counts[e] ? counts[e] + 1 : 1;
  });
  return counts;
}

async function getPeopleList(req, res, next) {
  try {
    const data = await peopleService.getPeopleList();
    res.send(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getPeopleList, getFrequencyCount };