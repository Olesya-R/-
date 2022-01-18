function addLeftDigit(k, a, b) {
    let del = 10
    while (Math.floor(k / del) != 0) {
        del = del * 10
    }
    k = a * del + k
    console.log(k)
    k = b*10*del + k
    console.log(k)
    
}


let k = +prompt('k = ')
let d1 = +prompt('d1 = ')
let d2 = +prompt('d2 = ')
addLeftDigit(k, d1, d2)


