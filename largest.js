const arr = [2, 5, 7, 8, 9, 0, 3]

let largest = 0

for (i = 0; i <= arr.length-1; i++) {;
    if(arr[i]>largest){
      largest=arr[i]
    }
}
console.log(largest)
