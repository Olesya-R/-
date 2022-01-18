function degToRad(d) {
    const pi = 3.14
    if ((d < 0) || (d > 360)) return 'error'
    return d * pi / 180
    
}

for (let i = 0; i < 5; i++) {
    let deg = +prompt(`deg${i + 1} = `)
    console.log(`deg${i + 1} = `, deg, degToRad(deg))
}
