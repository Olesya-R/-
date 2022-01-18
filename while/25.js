n = Number(prompt('Введите число Фибоначи'))
let x = 0
let x1 = 1
let x2 = 1

while (x < n + 1) {
    x = x1 + x2
    x2 = x1
    x1 = x
}
alert(x)