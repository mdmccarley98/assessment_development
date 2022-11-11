// Log all updates to any property of an object
const obj = {
    prop1: 0,
    prop2: 1
}

Object.defineProperty(obj, 'prop1', {
    writable: false
})

// answer
function logPropertyUpdates(target) {
    return new Proxy(target, {
        set(target, propName, value) {
            const success = Reflect.set(target, propName, value)
            
            if (success) {
                console.log(`Prop ${propName} set to ${value}`)
            }
        }
    })
}

// distractor #1
function logPropertyUpdates3(target) {
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            Object.defineProperty(target, key, {
                set(value) {
                    this['_' + key] = value
                    console.log(`Prop ${key} set to ${value}`)
                },
                get() {
                    return this['_' + key]
                }
            })
        }
    }
    return target
}
// distractor #2
function logPropertyUpdates1(target) {
    return new Proxy(target, {
        set(target, propName, value) {
            target[propName] = value
            console.log(`Prop ${propName} set to ${value}`)
        }
    })
}

// distractor #3
// function logPropertyUpdates2(target) {
//     const wrapper = {
//         set [propName](value) {
//             'use strict'
//             try {
//                 target[propName] = value
//                 console.log(`Prop ${propName} set to ${value}`)
//             } catch(e) {
//                 // Don't log if update fails
//             }
//         }
//     }

//     return wrapper
// }

const loggingObj = logPropertyUpdates(obj)

loggingObj.prop1 = 2
loggingObj.prop2 = 3
loggingObj.prop3 = 4