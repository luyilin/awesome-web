// 以第一个元素为基准值
function sort(arr) {
    if(arr.length < 2) return arr;
    var flag = arr[0],
        leftArr = [],
        rightArr = [];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > flag) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i])
        }
    }
    leftArr = sort(leftArr);
    rightArr = sort(rightArr);
    return leftArr.concat(flag, rightArr);
}

var a = [11,22,52,16,23,91];
let b = sort(a);
console.log(b)

// 以中间位的元素为基准值
function quickSort(arr) {
  if (arr.length < 2) return arr
  let mid = Math.ceil(arr.length/2)
  let left = []
  let right = []
  // let midArr = arr[mid]
  // arr.splice(mid, 1)
  let midArr = arr.splice(mid, 1)[0]
  // slice 前闭后开，包含 start 不包含 end;
  // splice 删除对应 index 上开始的几位元素，并添加新元素,返回一个包含删除的元素的数组
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < midArr) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(midArr, quickSort(right))
}
let c = quickSort([1,33,24,45,34])
console.log(c)

/**
 * 快速排序 思路
　　（1）在数据集之中，选择一个元素作为"基准"（pivot）。
　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，递归，直到所有子集只剩下一个元素为止。
 */