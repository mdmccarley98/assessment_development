
// Answer
function Queue1() {
    const backingArray = []

    return {
        enqueue: backingArray.push,
        dequeue: backingArray.shift
    }
}

// Distractor 1
function Queue2() {
    const backingArray = []

    return {
        enqueue: backingArray.push,
        dequeue: backingArray.pop
    }
}

// Distractor 2
function Queue3() {
    const backingArray = []

    return {
        enqueue: backingArray.unshift,
        dequeue: backingArray.shift
    }
}

// Distractor 3
function Queue4() {
    const backingArray = []

    return {
        enqueue: backingArray.pop,
        dequeue: backingArray.unshift
    }
}

function testQueue(name, Queue) {
    const myQueue = Queue()
    myQueue.enqueue(1)
    myQueue.enqueue(2)
    
    const r1 = myQueue.dequeue() === 1
    const r2 = myQueue.dequeue() === 2

    const didPass = r1 && r2

    console.log(`${name}: ${didPass}`)
}

testQueue('Queue1', Queue1)
testQueue('Queue2', Queue2)
testQueue('Queue3', Queue3)
testQueue('Queue4', Queue4)
