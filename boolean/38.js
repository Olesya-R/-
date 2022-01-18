x1 = Number(prompt('x1 = '))
y1 = Number(prompt('y1 = '))
x2 = Number(prompt('x2 = '))
y2 = Number(prompt('y2 = '))

if ((Math.abs(x2 - x1) == 1) && (Math.abs(y2 - y1) == 1) && (x1 <= 8) && (x2 <= 8) && (y1 <= 8) && (y2 <= 8)) {
    console.log(true)
} else console.log(false)