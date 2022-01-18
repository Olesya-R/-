n = Number(prompt('Введите N > 0'))

let res = 0
let k = 1

for (let i = 1; i <= n; i++) {
   
    res = res + 1/k
    k = k * i
    console.log(res)
}

alert(res)