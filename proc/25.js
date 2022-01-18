function isSquare(k) {
    return k == Math.pow(Math.sqrt(k), 2)
}
let sq = 0
for (let i = 0; i < 10; i++) {
    let x = +prompt(`x${i + 1} = `)
    console.log(`x${i+1} = `, x)
    if ((isSquare(x)) == 1) {
        sq ++
    }
  
}
console.log('square = ', sq)
