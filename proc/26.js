function isPower5(k) {
    let x = 0
    let k1 = 0
    do { 
        x++
        k1 = Math.pow(5, x)
    } while (k1 < k)
    if (k1 == k)
        return true
    else
        return false
    
}
let pw = 0
for (let i = 0; i < 10; i++) {
    let x = +prompt(`x${i + 1} = `)
    console.log(`x${i + 1} = `, x)
    console.log(isPower5(x))
    if ((isPower5(x)) == 1) {
        pw++
    }

}
console.log('power5 = ', pw)
