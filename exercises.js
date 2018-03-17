/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 *
 * ***Here's a Freebie to get you started!!!***
 */
var doubleArray = function(arr) {
  return arr.map(function(x) {
    return x * 2;
  });
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function(arr1, arr2) {
  var total1 = arr1.reduce(function(x, y) {
    return x + y;
  });
  var total2 = arr2.reduce(function(x, y) {
    return x + y;
  });
  return total1 + total2;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str) {
  return str.length;
};


/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function(arr) {
  return arr.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr) {
  return arr.reduce(function (total, eachNewNumber) {
    return total + eachNewNumber;
  }, 0);
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr) {
  return arr.map(function(str) {
    return str.length
  });
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(arr) {
  return arr.reduce(function(sum, str) {
    return sum + str.length
  }, 0);
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj) {
  let arr = [];
  for (key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj){
  let numKeys = 0
  for (keys in obj) {
    numKeys++
  };
  return numKeys;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(num) {
  let zeros = [];
  for (let i = 0; i < num; i++) {
    zeros.push(0);
  }
  return zeros;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr) {
  arr.pop();
  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str) {
  return str.split('');
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(array) {
  return array.pop().length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */

var sumBelowTen = function(array) {
  return array.filter(function(num) {
    return num < 10
  }).reduce(function(accumulator, num) {
    return accumulator += num;
  }, 0);
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(arr) {
  return arr.filter(function(str) {
    return str.length > 10
  }).length;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr) {
  return arr.reduce(function(acc, num) {
    return acc *= num;
  }, 1);
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  let allKeys = [];
  for (let keys in obj) {
    allKeys.push(keys);
  }
  return allKeys;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(arr) {
  arr = arr.filter(function(num) {
    return num > 0;
  })
  return arr.reduce(function(sum, num) {
    return sum += num;
  },0 );
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr) {
  return arr.filter(function(word) {
    return word.length <= 3;
  }).length;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr) {
  return arr.filter(function(value){
    return typeof value === 'object';
  }).length;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj) {
  let keysArr = [];
  for (var key in obj){
    keysArr.push(key);
  }
  return keysArr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj) {
  let valuesArr = [];
  for (var key in obj) {
    valuesArr.push(obj[key]);
  }
  return valuesArr;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value){
  let obj = {}
    obj[key] = value;
  return obj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key) {
  let obj = {}
    obj[key] = value;
  return obj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr) {
  let obj = {};
    obj[arr[0]] = arr[1];
  return obj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr) {
  let obj = {};
    obj[arr[1]] = arr[0];
  return obj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr) {
  let obj = {};
  arr.forEach(function(element) {
    obj[element] = 0;
  });
  return obj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj) {
  let valuesArr = [];
  for (var key in obj) {
    valuesArr.push(obj[key]);
  }
  return valuesArr;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  let keysArr = [];
  for (var key in obj) {
    keysArr.push(key);
  }
  return keysArr;
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj) {
  let tuples = [];
  for (var key in obj){
    tuples.push([key, obj[key]]);
  }
  return tuples;
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr) {
  let obj = {};
  arr.forEach(function(val) {
    obj[val] = false;
  });
  return obj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}