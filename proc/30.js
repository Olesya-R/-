function digitN(k, n) {
    for (let i = 0; i <n; i++) {
        k = Math.floor(k / 10)
    }
    if (k != 0) return k % 10
    else return -1
}

for (let c = 0; c < 5; c ++) {
    let x = +prompt(`x${c + 1} = `)
    console.log(`x${c + 1} = `, x, digitN(x, c))
}
