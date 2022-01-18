n = Number(prompt('Введите N > 0'))
let x
let k = 0
let s = 0

while (0 < n) {
    x = n % 10
    n = Math.floor(n / 10)
    k++
    s = s + x
}
alert('k = ' + k + ' ' + ' s = ' + s)