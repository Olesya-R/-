function isPalindrom(k) {
    let len = Math.floor(k.length / 2);
    for (let i = 0; i < len; i++) {
        if (k[i] !== k[k.length - i - 1])
            return false
    }        
    return true
}

let palindrom = 0
for (let i = 0; i < 10; i++) {
    let x = prompt(`x${i + 1} = `)
    console.log(`x${i + 1} = `, x, isPalindrom(x))
    palindrom = palindrom + isPalindrom(x)
}
console.log('palindrom = ', palindrom)