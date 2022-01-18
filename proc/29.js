function digitCount(k) {
    let c = 1;
    while ((k = k / 10) >= 1) {
        c++
    }
    return (c)
}

for (let i = 0; i < 5; i++) {
    let x = +prompt(`x${i + 1} = `)
    console.log(`x${i + 1} = `, x, digitCount(x))  
}
