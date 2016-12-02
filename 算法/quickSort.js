function sort(arr) {
    if(arr.length < 2) return arr;
    var flag = arr[0],
        leftArr = [],
        rightArr = [];
    for(var i = 1; i < arr.length; i++) {
        if (arr[i] > flag) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i])
        }
    }
    leftArr = sort(leftArr);
    rightArr = sort(rightArr);
    return leftArr.concat(flag).concat(rightArr);
}

var a = [11,22,52,16,23,91];
sort(a);
