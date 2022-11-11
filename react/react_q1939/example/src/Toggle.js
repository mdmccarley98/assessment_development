import React, { useState } from 'react'

function Toggle() {
    /* ### Missing state-handling code goes here ### */

    // Answer
    const [statusValue, setStatusValue] = useState(false)

    // Distractor 1
    // const [setStatusValue, statusValue] = useState(false)

    // Distractor 2
    // const statusValue = useState(false)

    // function setStatusValue(value) {
    //     statusValue = value
    // }

    // Distractor 3
    // const {statusValue} = getState()

    // function setStatusValue(value) {
    //     this.setState({statusValue: value})
    // }

    function handleClick() {
        setStatusValue(!statusValue)
    }

    const Status = () => {
        switch (statusValue) {
            case true:
                return <div>On!</div>
            case false:
                return <div>Off</div>
            default:
                return <div>Error: No Value!</div>
        }
    }

    return (
        <div>
            <Status />
            <input type='button' onClick={handleClick} value='Toggle' />
        </div>
    )
}

export default Toggle