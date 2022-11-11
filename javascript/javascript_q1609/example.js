const sparseArray = [,1,,2,,3,,4]

function answer() {
    let sum = 0

    sparseArray.forEach(val => {
        sum += val
    })

    return sum
}

function distractor1() {
    let sum = 0
    
    for (let i = 0; i < sparseArray.length; i++) {
        sum += sparseArray[i]
    }
    
    return sum
}

function distractor2() {
    let sum = 0
    
    for (const val of sparseArray) {
        sum += val
    }
    
    return sum
}

function distractor3() {
    let sum = 0

    for (const val in sparseArray) {
        sum += val
    }

    return sum
}

console.log(answer())
console.log(distractor1())
console.log(distractor2())
console.log(distractor3())