n = Number(prompt('Введите N'))
a = Number(prompt('Введите A'))

let res = 1

for (let i = 1; i <= n; i ++) {
    res = res + Math.pow(-a,i)
    
}
alert(res)