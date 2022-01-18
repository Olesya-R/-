n = Number(prompt('Введите N > 0'))

let res = 0
let k = 1

for (let i = 1; i <= n; i++) {
    k = k * i
    res = res + k
    console.log(res)
}

alert(res)