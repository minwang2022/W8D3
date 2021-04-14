function NumArr(name){ 
    this.name = name;
};

    NumArr.prototype.uniq = function() {

    const newArr = [];

    for ( let i = 0; i < arr.length; i++ ) {
        if (newArr.includes(arr[i])) {
            continue; 
        };
        newArr.push(arr[i]);
    };
    return newArr;
    };
    
    const arr = new NumArr()


console.log([1,2,2,3,3,3].uniq());