const myPromise = Promise.resolve()

function createTask(name) {
    return () => {
        throw new Error(`An error in ${name}`)
    }
}

function createErrorHandler(name) {
    return (error) => {
        console.log(`Caught error in: ${name}`)
    }
}

// Answer
myPromise.then(createTask('answer'), createErrorHandler('answer'))

// D1
myPromise.then(createTask('D1')).catch(createErrorHandler('D1'))

// D2
myPromise.then(createTask('D2'), undefined).then(undefined, createErrorHandler('D2'))

// D3: They all handle the error