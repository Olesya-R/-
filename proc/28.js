function isPrime(n) {
   for (let i = 2; i < n; i ++) {
        if (n % i == 0) {
            return false
        }
   }
   return n > 1
}

let prime = 0
for (let i = 0; i < 10; i++) {
    let x = +prompt(`x${i + 1} = `)
    console.log(`x${i + 1} = `, x, isPrime(x))
    prime = prime + isPrime(x)

}
console.log('prime = ', prime)