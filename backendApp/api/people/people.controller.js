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

async function getPossibleDuplicates(req, res, next) {
  try {
    const data = await peopleService.getPeopleList();

    checkForDuplicates(data[0], data[1]);//TODO iterate though the object.
    checkForDuplicates(data[7], data[8]);

    const possibleDuplicates = data.filter(o => o.duplicatedFlag === true);
    
    
    res.send(possibleDuplicates);
  } catch (err) {
    next(err);
  }
}

//Add a flag to both objects if they are possible duplicates.
function checkForDuplicates(obj1, obj2) {
  const count1 = getFrequencyCountByString(obj1.email);
  const count2 = getFrequencyCountByString(obj2.email);
  const size1 = Object.keys(count1).length;
  const size2 = Object.keys(count2).length;
  let greaterObj; 
  let lesserObj;
  let mismatches = 0;

  //Difference of unique characters between emails should be less than or equal the allowed typo precision.
  if(Math.abs(size1 - size2) <= process.env.TYPO_PRECISION) {
    //Iterate through the greater object always to catch all the number of mismatches.
    if(size1 > size2) {
      greaterObj = count1;
      lesserObj = count2;
    } else {
      greaterObj = count2;
      lesserObj = count1;
    }
    for(let char in greaterObj) {
      //If the character is not in the lesser obj, every occurrence is a mismatch.
      if(!lesserObj[char]) {
        mismatches = mismatches + greaterObj[char];
      } else {
        //The difference of occurrences are mismatches.
        mismatches = mismatches + (Math.abs(greaterObj[char] - lesserObj[char]));
      }
    }

    //If the number of mismatches are less than or equal the allowed typo precision value, it is a possible duplicate.
    if(mismatches <= process.env.TYPO_PRECISION) {
      obj1.duplicatedFlag = true;
      obj2.duplicatedFlag = true;
    }

  }
}

module.exports = { getPeopleList, getFrequencyCount, getPossibleDuplicates };