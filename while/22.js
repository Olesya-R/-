n = Number(prompt('Введите N > 0'))
let k 
let i = 2
if (n <= 1) alert('Error')
while (i <= Math.sqrt(n)) {
    k = true
    if (n % i == 0) {
        k = false
        break
    }
    i ++
}
alert(k) 

   