function minMax(x, y) {
    if (x > y) {
        y = [x, x = y][0]
    }
    console.log('min = ', x, ' max = ', y)
}

let a = +prompt('a = ')
let b = +prompt('b = ')
let c = +prompt('c = ')
let d = +prompt('d = ')

console.log('a = ', a, ' b = ', b, ' c = ', c, ' d = ', d)
minMax(a, b)
minMax(c, d)
minMax(b, c)




