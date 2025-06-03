function divisible(n) {
    let divisibleBy3 = 0
    let divisibleBy5 = 0

    for (i = 0; i <= n; i++) {
        if (i % 3 == 0) {
            divisibleBy3 += i
        } else if (i % 5 == 0) {
            divisibleBy5 += i
        }
    }
    return divisibleBy3 - divisibleBy5

}
console.log(divisible(10))
