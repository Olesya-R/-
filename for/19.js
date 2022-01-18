n = Number(prompt('Введите N > 0'))

let res = 1

for (let i = 2; i <= n; i ++) {
    res = res * i
    console.log(res)
}

alert(res)