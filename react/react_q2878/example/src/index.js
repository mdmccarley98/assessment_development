import React, {
  useEffect,
  useState,
  useRef
} from 'react';
import ReactDOM from 'react-dom';

// Answer
function useHistory(state) {
  const historyRef = useRef([])

  useEffect(() => {
    historyRef.current = [...historyRef.current, state]
  }, [state])

  return historyRef.current
}

// Distractor #1
// function useHistory(state) {
//   useEffect(() => {
//     const historyRef = useRef([])
//     historyRef.current = [...historyRef.current, state]
//     return historyRef.current
//   }, [state])
// }

// Distractor #2
// function useHistory(state) {
//   const history = []

//   useEffect(() => {
//     history.push(state)
//   }, [state])

//   return history
// }

// Distractor #3
// function useHistory(state) {
//   const history = []

//   history.push(state)

//   return history
// }


function ViewHistoryCounter() {
  const [count, setCount] = useState(0)
  const history = useHistory(count)
  const increment = () => setCount(count + 1)

  return (
    <div>
      <div>History: {JSON.stringify(history)}</div>
      <div>Value: {count}</div>
      <div><button onClick={increment}>Increment</button></div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ViewHistoryCounter />
  </React.StrictMode>,
  document.getElementById('root')
);
