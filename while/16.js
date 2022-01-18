p = Number(prompt('Введите количество процентов Р < 50'))

s = 10
k = 0

while (s < 200) {
    s = s + (s * p)/100
    k ++
}

alert('S = ' + s + ' km' + ' K = ' + k + ' days')
