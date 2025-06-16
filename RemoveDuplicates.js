arr = [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 2, 3, 4];
arr2 = new Set(arr)
arr3 = [...arr2]
console.log(arr3)

// function remDuplicates(nums) {

//     let dupes = []
//     if (nums.length === 0) {
//         return 0
//     }
//     for (i = 0; i < nums.length; i++) {
//         for (j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 dupes.push(nums[i])
//             }
//         }
//     }
//     return dupes;
// }
// console.log(remDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 4]))
