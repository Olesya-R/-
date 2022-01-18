x1 = Number(prompt('Введите первое число'))
x2 = Number(prompt('Введите второе число'))
x3 = Number(prompt('Введите третье число'))
x4 = Number(prompt('Введите третье число'))

if ((x1 == x2) && (x1 == x3)) {
    alert('4')
} else if ((x1 == x2) && (x1 == x4) ) {
    alert('3')
} else if ((x1 == x3) && (x1 == x4)) {
    alert('2')
} else alert('1')