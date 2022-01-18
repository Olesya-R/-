n = Number(prompt('Введите N'))

let res = 0
let k = -1

for (i = 0; i < n; i ++) {
    k = k * (-1)
    res = res + k*(1 + 0.1*i)
}
alert(res)