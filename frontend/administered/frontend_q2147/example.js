const { performance } = require('perf_hooks')

const asyncTask = () => new Promise(resolve => {
    setTimeout(resolve, 1000)
})

// Answer (Slow)
async function performTasks() {
    await asyncTask()
    await asyncTask()
    await asyncTask()
}

// D1
async function performTasks1() {
    const r1 = asyncTask()
    const r2 = asyncTask()
    const r3 = asyncTask()

    await r1
    await r2
    await r3
}

// D2
async function performTasks2() {
    await Promise.all([
        asyncTask(),
        asyncTask(),
        asyncTask()
    ])
}

// D3
async function performTasks3() {
    await Promise.allSettled([
        asyncTask(),
        asyncTask(),
        asyncTask()
    ])
}

async function timeFunc(name, func) {
    const start = performance.now()
    await func.apply()
    const end = performance.now()
    
    console.log(`${name} took: ${end - start}`)
}

(async () => {
    await timeFunc('answer', performTasks)
    await timeFunc('d1', performTasks1)
    await timeFunc('d2', performTasks2)
    await timeFunc('d3', performTasks3)
})()
