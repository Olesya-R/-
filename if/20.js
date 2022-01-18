a = Number(prompt('Точка А:'))
b = Number(prompt('Точка В:'))
c = Number(prompt('Точка С:'))

if (Math.abs(c - a) < Math.abs(c - b)) {
    alert('C ' + Math.abs(c - a))
} else alert('B ' + Math.abs(c - b))