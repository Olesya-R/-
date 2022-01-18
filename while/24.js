n = Number(prompt('Введите N > 1'))
let x = 0
let x1 = 1
let x2 = 1

while (x < n) {
    x = x1 + x2
    x2 = x1
    x1 = x
}

alert(x == n ? true : false)