function fact(n) {
    let fact = 1
    if (n < 0) return 'error'   
    for (let i = 1; i <= n; i ++) {
        fact = fact * i
    } return fact
         
}

for (let i = 0; i < 5; i++) {
    let x = +prompt(`x${i + 1} = `)
    console.log(`x${i + 1} = `, x, fact(x))
}
