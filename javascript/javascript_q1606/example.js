
function myFunction(y1, y2, ...y3) {
    const [x1, ...[result]] = y3

    console.log(result)
}

const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']

myFunction(...myArray)
