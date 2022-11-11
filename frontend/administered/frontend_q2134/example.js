const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3)
]

const result = tasks.reduce((chain, current) => (
    chain.then(current)
), Promise.resolve())

console.log(result)

// A: A Promise
// D: An Array of Promises
// D: A Function
// D: An Array of Functions
