import React, {
    useCallback,
    useState
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

function Counter() {
    const [value, setValue] = useState(0)
    const handleIncrement = useCallback(() => { setValue(value + 1) }, [value])
    const handleReset = useCallback(() => { setValue(0) }, [])

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
