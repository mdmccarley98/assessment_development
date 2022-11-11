
function funcWithCallback(val1, val2, callback) {
    setTimeout(() => {
        callback(val1 + val2)
    }, 1)
}

// Answer
const callbackToPromise = (asyncWithCallback) => (...funcArgs) => {
    return new Promise((resolve, reject) => {
        try {
            asyncWithCallback(...funcArgs, (...callbackArgs) => {
                resolve(callbackArgs)
            })
        } catch (error) {
            reject(error)
        }
    })
}

// Distractor #1 (Returning promise instead of function that returns promise)
// function callbackToPromise(asyncWithCallback) {
//     return new Promise((resolve, reject) => {
//         try {
//             asyncWithCallback((...callbackArgs) => {
//                 resolve(callbackArgs)
//             })
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// Distractor #2 (Some people don't like promise syntax)
// const callbackToPromise = (asyncWithCallback) => {
//     return async (...funcArgs) => {
//         return await asyncWithCallback(...funcArgs, (...callbackArgs) => {
//             return callbackArgs
//         })
//     }
// }

// Distractor #3 (This promise will not resolve)
// function callbackToPromise(asyncWithCallback) {
//     function callback(...callbackArgs) {
//         return Promise.resolve(callbackArgs)
//     }

//     return function() {
//         return new Promise(() => {
//             try {
//                 asyncWithCallback.apply(null, [...arguments, callback])
//             } catch (error) {
//                 return Promise.reject(error)
//             }
//         })
//     }

// }


const resultFunc = callbackToPromise(funcWithCallback)

resultFunc(1, 2).then(([value]) => console.log(value))