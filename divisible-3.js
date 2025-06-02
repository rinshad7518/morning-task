const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2=[]
for (i = 0; i < arr.length; i++) {
    if (arr[i]%3!==0) {
        arr2.push(arr[i])
    }
    
}
console.log(arr2)