x = Number(prompt('x = '))
y = Number(prompt('y = '))

while ((x != 0) && (y != 0)) {
    if (x > y) {
        x = x % y 
    } else y = y % x
}

alert(x + y)