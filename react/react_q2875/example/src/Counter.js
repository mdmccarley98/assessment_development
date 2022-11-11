import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
        // this.addOne = this.addOne.bind(this)
    }

    addOne() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <input type='button' value='Add One' onClick={this.addOne} />
            </div>
        )
    }
}

export default Counter