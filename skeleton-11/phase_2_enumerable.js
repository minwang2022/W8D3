
Array.prototype.myEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

const foo = function(ele) {
    return ele * 10;
}

// console.log([1, 2, 3].myEach(callback));

Array.prototype.myMap = function(callback) {

    const arr = [];

    this.myEach(function(arg) {
        arr.push(callback(arg));
    })

    // for (let i = 0; i < this.length; i++) {
    //     arr.push(callback(this[i]));
    // }

    return arr;
}

// console.log([1, 2, 3].myMap(ele => ele / ele));
// console.log([1, 2, 3].myMap(foo));

Array.prototype.myReduce = function(callback, initVal) {

    // let acc = initVal || this[0];
    const arr = this;

    if (initVal === undefined) {
        let initVal = arr[0];
        let arrNew = arr.slice(1);

        arrNew.myEach(function (ele) {
            initVal += callback(ele);
        });
        
        return initVal;
    }  

    let acc = initVal;

    arr.myEach(function(ele) {
        acc += callback(ele);
    });

    return acc;
} 

// console.log([1, 2, 3].myReduce(foo, 100));