n = Number(prompt('Введите N > 0'))


while ((n > 0) && ((n % 10) % 2 == 0)) {
    n = Math.floor(n / 10)

}
if ((n % 10) % 2 != 0) {
    alert(true)
} else alert(false)