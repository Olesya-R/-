function swap(x, y) {
    y = [x, x = y][0]
    console.log(x, y)
}

let a = +prompt('a = ')
let b = +prompt('b = ')
let c = +prompt('c = ')
let d = +prompt('d = ')

console.log('a = ', a, ' b = ', b, ' c = ', c, ' d = ', d)
swap(a, b)
swap(c, d)
swap(b, c)




