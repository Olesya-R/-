function digitCountSum() {
    let s =  0
    let c = 0
    while (k > 0) {
        s =s + k % 10
        ++ c 
        k =Math.floor(k / 10)
    }
   console.log(s, c)
}

for (let i = 0; i < 5; i ++) {
    k = +prompt('k = ')
    digitCountSum(k)
}
