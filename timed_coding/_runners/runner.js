function Runner(func) {
    return (input, expected, rationale) => {
        const result = JSON.stringify(func(...input))
        input = JSON.stringify(input)
        expected = JSON.stringify(expected)

        if (result === expected) {
            console.log(' pass:', `${input}, ${expected}; ${rationale}`)
        } else {
            console.log('FAIL!:', `${input}, ${expected}; result: ${result}; ${rationale}`)
        }
    }
}

module.exports = Runner