import React, {
    useCallback,
    useReducer
} from 'react'

const IncrementButton = React.memo(({ increment }) => {
    console.log('Render IncrementButton')

    return (
        <button onClick={increment}>Increment</button>
    )
})

const ResetButton = React.memo(({ reset }) => {
    console.log('Render ResetButton')

    return (
        <button onClick={reset}>Reset</button>
    )
})

function counterReducer(state, action) {
    switch (action) {
        case 'reset':
            return 0
        case 'increment':
            return state + 1
        default:
            throw new Error('Invalid action: ' + action)
    }
}

function Counter() {
    const [value, dispatch] = useReducer(counterReducer, 0)
    const handleIncrement = useCallback(() => dispatch('increment'), [])
    const handleReset = useCallback(() => dispatch('reset'), [])

    console.log('Render Counter')

    return (
        <div>
            <div>{value}</div>
            <IncrementButton increment={handleIncrement} />
            <ResetButton reset={handleReset} />
        </div>
    )
}

export default Counter