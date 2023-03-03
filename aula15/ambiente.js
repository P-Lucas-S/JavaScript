let num = [5, 8, 2, 9, 3]

num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
num.sort()
console.log(`O valor 8 está na posição ${pos}`)

/*
for(let c = 0; c < num.length; c++){
    console.log(num[c])
}


for(let c in num){
    console.log(num[c])
}
*/