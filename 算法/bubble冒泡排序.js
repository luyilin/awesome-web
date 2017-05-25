/**
 * 冒泡排序 思路
 * 1. 比较数组相邻两个值的大小，如果后一个数大于前一个数，则交换二者位置
 * 2. 所以应该写一个 for 循环，比较一个元素和这个元素后面的那个元素的大小
 */

function bubble(arr) {
  for(let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j+1]) {
      let temp = arr[j+1]
      arr[j+1] = arr[j]
      arr[j] = temp
    }
  }
  return arr
}

let a = bubble([1,23,14,33,25])
console.log(a)