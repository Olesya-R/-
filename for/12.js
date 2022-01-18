n = Number(prompt('Введите N'))

let res = 1
let k = 1.1
if (Number.isInteger(n)) {
    for (let i = 0; i < n; i ++) {
        res = res * k
        k = k + 0.1   
    }
    alert(res)
}