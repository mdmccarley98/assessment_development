if (typeof TEST_ENV !== 'undefined') {
    console.log('In test environment.')
}

if (typeof TEST_ENV !== undefined) {
    console.log('In test environment.')
}

// if (TEST_ENV !== undefined) {
//     console.log('In test environment.')
// }

if (!!TEST_ENV) {
    console.log('In test environment.')
}