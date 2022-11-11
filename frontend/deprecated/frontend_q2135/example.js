
// Answer
function logRejection(result) {
    result.catch(() => console.log('Log rejection'))

    return result
}

// D1
// function logRejection(result) {
//     return result.catch(() => console.log('Log rejection'))
// }

// D2
// function logRejection(result) {
//     return result.then(() => console.log('Log rejection'))
// }

// D3
// function logRejection(result) {
//     result.finally(() => () => console.log('Log rejection'))

//     return result
// }


function childFunction() {
    let result = new Promise((resolve, reject) => {
        setTimeout(reject, 5)
    })

    return logRejection(result)
}

function parentFunction() {
    childFunction()
        .then(() => { console.log('Success!') })
        .catch(() => { console.log('Do retry') })
}

parentFunction()