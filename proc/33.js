function radToDeg(r) {
    const pi = 3.14
    if ((r < 0) || (r > 2 * pi)) return 'error'
    return 180 / pi * r

}

for (let i = 0; i < 5; i++) {
    let rad = +prompt(`rad${i + 1} = `)
    console.log(`rad${i + 1} = `, rad, radToDeg(rad))
}
