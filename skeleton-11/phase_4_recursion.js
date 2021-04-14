function range(start, end) {
    if (start === end) {
        return [1];
    }

    let ele = range(start + 1, end); // 
    ele.push(start + 1); // [] << 2
    return ele
}

console.log(range(1, 5));