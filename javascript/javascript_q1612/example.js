const input = [1, 2, 3, 4, 5]
let output = []

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function runOneAtATime(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            output.push(num)
            resolve()
        }, getRandomInt(10))
    })
}

/* ### Implement processInput() here ### */

// Answer
async function processInput(input) {
    for (const num of input) {
        await runOneAtATime(num)
    }
}

// Distrator 1
async function processInput1(input) {
    input.forEach(async num => {
        await runOneAtATime(num)
    })
}

// Distractor 2
function processInput2(input) {
    const work = input.map(num => {
        return runOneAtATime(num)
    })
    return Promise.all(work)
}

// Distractor 3
async function processInput3(input) {
    for await (let num of input) {
        runOneAtATime(num)
    }
}

// Another
function processInput4(input) {
    return input.reduce((work, num) => {
        return work.then(() => runOneAtATime(num))
    }, Promise.resolve())
}

processInput(input).then(() => {
    const result = input.join() === output.join()

    console.log(`Result: ${result}`)
})
