function sortInc3(x, y, z) {
    if (x > y) {
        y = [x, x = y][0]
    }
    if (x > z) {
        z = [x, x = z][0]
    }
    if (y > z) {
        z = [y, y = z][0]
    }
    console.log(x, y, z)
}

let a1 = +prompt('a1 = ')
let b1 = +prompt('b1 = ')
let c1 = +prompt('c1 = ')
let a2 = +prompt('a2 = ')
let b2 = +prompt('b2 = ')
let c2 = +prompt('c2 = ')

console.log('a1 = ', a1, ' b1 = ', b1, ' c1 = ', c1)
console.log('a2 = ', a2, ' b2 = ', b2, ' c2 = ', c2)

sortInc3(a1, b1, c1)
sortInc3(a2, b2, c2)




