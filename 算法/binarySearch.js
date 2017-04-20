/**
 * 二分查找
 * 二分查找的前提是：数组、有序
 * 原理是：和数组的中间元素比较，如果等于则直接返回，如果不等则继续取半查找
 * 方法 while 循环，设定 start end 参数，取中间元素，判断目标元素在中间元素的左侧或右侧，更改 start 或 end 取新的中间元素，截取数组
 */

function binarySearch(arr, target) {
  let start = 0,
      end = arr.length -1
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2)
    let pivot = arr[mid]
    if (pivot === target) return mid
    if (target > pivot) {
      start = mid + 1
    } else {
      end = mid -1
    }
  }
  return -1
}

let a = binarySearch([12,24,33,47,49], 49)
console.log(a)