n = Number(prompt('Введите N > 0'))
let x
let arr = []

while (0 < n) {
    x = n % 10
    n = Math.floor(n / 10)
    arr.push(x)
}
alert(arr.join(''))