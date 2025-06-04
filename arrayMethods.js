const orders=[200,450,130,50,1000,20];

orders.forEach(x=>console.log(x))
arrFilter=orders.filter(x=>x>100)
console.log("Filtered Array : ",arrFilter)

arrMap=orders.map(c=>c-10)
console.log("Mapped Array : ",arrMap)

arrReduce=arrMap.reduce((a,b)=>{
    return a+b
})
console.log( "Total Amount After Discount : ",arrReduce)