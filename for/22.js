n = Number(prompt('Введите N > 0'))
x = Number(prompt('Введите X'))

let res = 1
let k = 1
let y = 1

for (let i = 1; i <= n; i++) {
    
    k = k * i
    y = y * x
    res = res + y / k
    
    console.log(res)
}

alert(res)