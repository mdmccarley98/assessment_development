const myArray = new Array(2)

myArray[1] = 1
myArray[3] = 3

console.log('Length:', myArray.length)

console.log('Elements:')

for (const element of myArray) {
    console.log('\t', element)
}