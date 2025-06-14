function palindrome(val) {
    let val2 = String(val)
    let reversed = ""
    for (i = val2.length - 1; i >= 0; i--) {
        reversed += val2[i]
    }
    if (val == reversed) {
        return true

    } else {
        return false
    }

}
console.log(palindrome(121))