function invDigits() {
    
    let kSep = k.split('')
    let kRev = kSep.reverse();
    let kDone = kRev.join('')
    console.log(kDone)
}

for (let i = 0; i < 5; i++) {
    k = prompt('k = ')
    invDigits(k)
}
