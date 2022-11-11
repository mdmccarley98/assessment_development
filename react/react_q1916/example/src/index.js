/* eslint-disable react-hooks/rules-of-hooks */
import React, { 
  useEffect, 
  // useRef, 
  useState 
} from 'react'
import ReactDOM from 'react-dom'

function ClockDisplay({ value }) {
  return <div>{value}</div>
}

function CountDown({ from = 3, children }) {
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (value > 0) {
      setTimeout(() => {
        setValue(value - 1)
      }, 1000)
    }
  }, [value])

  if (value > 0) {
    return React.cloneElement(children, { value })
  } else {
    return <h1>Blast off!</h1>
  }
}

// Base
// function withLogging(WrappedComponent) {
//   return class PL extends React.Component {
//     componentDidMount() {
//       console.log('Mounted')
//       console.log(JSON.stringify(this.props))
//     }

//     componentWillUnmount() {
//       console.log('Unmounted')
//     }

//     componentDidUpdate() {
//       console.log(JSON.stringify(this.props))
//     }

//     render() {
//       return <><WrappedComponent {...this.props}/></>
//     }
//   }
// }

// Answer
const withLogging = (WrappedComponent) => (props) => {
  useEffect(() => {
    console.log('Mounted')

    return () => {
      console.log('Unmounted')
    }
  }, [])

  useEffect(() => {
    console.log(JSON.stringify(props))
  })

  return <><WrappedComponent {...props} /></>
}

// Distractor #1 (Trying to do it with one effect)
// const withLogging = (WrappedComponent) => (props) => {
//   useEffect(() => {
//     console.log('Mounted')

//     console.log(JSON.stringify(props))

//     return () => {
//       console.log('Unmounted')
//     }
//   })

//   return <><WrappedComponent {...props} /></>
// }

// Distractor #2 (Using hooks in the HOC, rather than the returned component)
// function withLogging(WrappedComponent) {
//   const [firstRender, setFirstRender] = useState(true)
//   const wrappedRef = useRef()

//   function isMounted() {
//     return wrappedRef.current != null
//   }

//   return function (props) {
//     if (firstRender) {
//       console.log('Mounted')
//       setFirstRender(false)
//     }

//     if (isMounted()) {
//       console.log(JSON.stringify(props))
//     } else {
//       console.log('Unmounted')
//     }

//     return <><WrappedComponent {...props} /></>
//   }
// }

// Distractor #3 (First log will happen before "Mounted" log statement)
// function withLogging(WrappedComponent) {
//   return function (props) {
//     useEffect(() => {
//       console.log('Mounted')
      
//       return () => {
//         console.log('Unmounted')
//       }
//     }, [])
    
//     console.log(JSON.stringify(props))

//     return <><WrappedComponent {...props} /></>
//   }
// }

const LoggingClockDisplay = withLogging(ClockDisplay)

ReactDOM.render(
  // <React.StrictMode>
    <CountDown from={3}>
      <LoggingClockDisplay />
    </CountDown>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
