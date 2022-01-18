x = Number(prompt('Введите х:'))
y = Number(prompt('Введите у:'))

if ((x != 0) && (y != 0)){
    if ((x > 0) && (y > 0)) {
        alert('I')
    } else if ((x > 0) && (y < 0)) {
        alert('IV')
    } else if ((x < 0) && (y > 0)) {
        alert('II')
    } else alert('III')
} else alert('Try again')
    
