Array.prototype.bubbleSort = function() {
    let sorted = false;
    
    while (!sorted) {
        let sorted = true;
        for (let i = 0; i < this.length -1; i++) {
            let ele1 = this[i];
            let ele2 = this[i + 1];
        debugger
            if (ele1 > ele2) {
                let ele = ele1;
                this[i] = ele2; 
                this[i + 1] = ele; 
                let sorted = false;
            }
        }
    }

    return this;
}

// console.log([1,5,3,8,2].bubbleSort());