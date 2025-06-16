const products = [
    {
        name: "A",
        price: 200
    },
    {
        name: "B",
        price: 100
    },
    {
        name: "C",
        price: 150
    },
    {
        name: "D",
        price: 200
    }
];
// let sum=0
// for(vals of products){
// sum+=vals.price
// }
// console.log(sum)



//updated
let sortArr= products.sort((a,b)=>a.price-b.price)
console.log(sortArr)
 const Total=products.reduce((a,b)=>a+=b.price,0)
 console.log(Total)