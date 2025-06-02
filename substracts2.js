function divisible(n) {
    let divBy3 = 0
    let divBy5 = 0

    for (i = 0; i <= n; i++) {
        if (i % 3 == 0) {
            divBy3 += i
        } else if (i % 5 == 0) {
            divBy5 += i
        }
    }
    return divBy3 - divBy5

}
console.log(divisible(10))