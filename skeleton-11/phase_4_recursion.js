function range(start, end) {
    if (start === end) {
        return [1];
    }
   
    let ele = range(start, end -1)
    ele.push(end);  
 
    return ele
}

// console.log(range(1, 5));

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    let sum = 0; 
    sum += sumRec(arr.slice(0, arr.length -1));
    return sum;
}

console.log(sumRec([1,5,6,3]));