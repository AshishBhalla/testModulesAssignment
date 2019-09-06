// ****************************_.each*****************************************
// It can help in running a function on a provided array. The iteratee(i.e. the function) can have 3 arguements
// 1. value 2. index 3. array it self
const _ = require('underscore');

var alert = (v,k,l) =>{
    console.log(k);
}

// var lst = [1,2,3];
// in case of js object, the iteratee will have following 3 arguements
// 1. value 2. key 3. array it self
var lst = { one: 1, two: 2, three: 3 }

_.each(lst,alert);
// *****************************************************************************


// ****************************_.map*****************************************
// It produces a new array using the iteratee  i.e. transformation function
// same as _.each the function will be passed 3 values
// 1. value 2. key or index(for JS object) 3. array itse    lf
lst = [1,2,3]

var dataLst = _.map(lst,(v,k,l) =>{
    return v*4;
})

console.log(dataLst);

// Vanila JS equivalent of the same but only in case of an array
console.log(lst.map(element => element * 4));
// *****************************************************************************


// ****************************_.reduce*****************************************
// It reduces the list to a single value based upon the tranformative function
// It takes following args
// 1. memo- the first element of the list.Necessary to give first element else reduce won't work properly
// 2. same as ._each value,key(index),list(itself)
lst = [1, 2, 3]

var sum = _.reduce(lst,(memo,value,key,lst) =>{
    console.log(key + ' ' + lst)
    return memo + value;
})

console.log(sum);
// *****************************************************************************