function addRightDigit(k, a, b) {
    k = k * 10 + a
    console.log(k)
    k = k*10 + b
    console.log(k)


}


let k = +prompt('k = ')
let d1 = +prompt('d1 = ')
let d2 = +prompt('d2 = ')
addRightDigit(k, d1, d2)


