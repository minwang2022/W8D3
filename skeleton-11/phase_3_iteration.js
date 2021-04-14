Array.prototype.bubbleSort = function() {
    let sorted = false;
    
    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length -1; i++) {
            let ele1 = this[i];
            let ele2 = this[i + 1];
            
            if (ele1 > ele2) {
                this[i] = ele2; 
                this[i + 1] = ele1; 
                sorted = false;
            }
        }
    }

    return this;
}

// console.log([1,5,3,8,2].bubbleSort());

String.prototype.substrings = function() {

    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            let char = this.slice(i, j);
            newArr.push(char);
        }
    }

    return newArr
}

// console.log('string'.substrings());