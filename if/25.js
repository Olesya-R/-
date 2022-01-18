x = Number(prompt('Введите х:'))

if (Number.isInteger(x)) {
    if ((x < -2) || (x > 2)) {
        alert(2*x)
    } else alert(-3*x)
} else alert('Try again')