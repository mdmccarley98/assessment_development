
let myArray = [1, 2]
myArray.customProperty = true

console.log('Answer:')

for (const index in myArray) {
    const element = myArray[index]
    console.log(element)
}

console.log('\nDistractor 1:')

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    console.log(element)
}

console.log('\nDistractor 2:')

for (const element of myArray) {
    console.log(element)
}

console.log('\nDistractor 3:')

myArray.forEach(element => {
    console.log(element)
})
