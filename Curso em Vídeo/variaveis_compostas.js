let num = [4,8,2,9,3]
num[5] = 6
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor é o ${num.length}`)
console.log(`Nosso vetor é o ${num.sort()}`)
for(let pos = 0; pos < num.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('--------------------------------------------')
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(num.indexOf(8))