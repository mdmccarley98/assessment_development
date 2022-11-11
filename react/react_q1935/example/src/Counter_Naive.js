import React, {
    useState
} from 'react'

const IncrementButton = ({ increment }) => {
    console.log('Render IncrementButton')

    return (
        <button onClick={increment}>Increment</button>
    )
}

const ResetButton = ({ reset }) => {
    console.log('Render ResetButton')

    return (
        <button onClick={reset}>Reset</button>
    )
}

function Counter() {
    const [value, setValue] = useState(0)
    const handleIncrement = () => { setValue(value + 1) }
    const handleReset = () => { setValue(0) }

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