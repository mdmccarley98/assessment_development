import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function ChildComponent() {
  const [causeError, setCauseError] = useState(false)

  if (causeError) throw new Error('Oh no!')

  return (
    <button onClick={() => setCauseError(true)}>Cause Error</button>
  )
}

function App({ children }) {
  return (
    <div>
      <h1>My App</h1>
      {children}
    </div>
  )
}

// Answer
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.props.message}</h1>
    }

    return this.props.children
  }
}

// Distractor #1
// function ErrorBoundary({children, message}) {
//   try {
//     return children
//   } catch (error) {
//     return <h1>{message}</h1>
//   }
// }

// Distractor #2
// function ErrorBoundary({message, children}) {
//   const error = useCatchError()

//   if (error) {
//     return <h1>{message}</h1>
//   }

//   return children
// }

// Distractor #3
// const ErrorBoundary = React.errorBoundaryFactory(({children, message, error}) => {
//   if (error) return <h1>{message}</h1>

//   return children
// })


ReactDOM.render(
    <App>
      <ErrorBoundary message='Temporarily Unavailable...'>
        <ChildComponent />
      </ErrorBoundary>
    </App>,
  document.getElementById('root')
)
