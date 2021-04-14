Array.prototype.myEach = function(cb) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        let ele = cb(this[i]);
        newArr.push(ele);
    }
    return newArr
}

const cb = function callback(ele) {
    return ele * 10;
}

// console.log([1, 2, 3].myEach(cb));

// Array.prototype.myMap = function() {
//     const arr = this;

//     return function()

// }