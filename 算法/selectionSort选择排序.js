function main(arr) {
  for(let i = 0; i < arr.length-1; i++) {
    let max = arr[i]
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < max) {
        let temp
        temp = max
        max = arr[j]
        arr[j] = temp
      }
    }
    arr[i] = max
  }
  return arr
}

let a = [11,22,52,16,23,91]
let b = main(a)
console.log(b)