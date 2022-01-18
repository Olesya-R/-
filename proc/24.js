function even(k) {
    return (k % 2 != 0) ? false : true
}

for (let i = 0; i < 10; i ++) {
    let x = +prompt(`x${i+1} = `)
    console.log('x = ', x, (even(x)))
}