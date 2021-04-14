Array.prototype.uniq = function() {

    const newArr = [];

    for ( let i = 0; i < this.length; i++ ) {
        if (newArr.includes(this[i])) {
            continue; 
        };
        newArr.push(this[i]);
    };
    return newArr;
};


// console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {

    const pairs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push(i);
                pairs.push(j);
            };
        };
    };

    return pairs;
};

// console.log([1, -1, 5, 6, 9, -9].twoSum());

Array.prototype.transpose = function() {

    const transposed = [];
    
    for (let i = 0; i < this.length; i++) {
        // console.log(this[i]);
        const subArr = [];

            for (let j = 0; j < this[i].length; j++) {
                subArr.push(this[j][i])
            };
        
        transposed.push(subArr);
    };

    return transposed;
};

// console.log([[1, 2], [5, 6]].transpose());