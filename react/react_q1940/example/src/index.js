import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

const initialState = { value: 'Hello' }

// Stem
const helloReducer = (state, action) => {
  if (state.value === 'Hello') {
    state.value = state.value + ' World!'
    return state
  }
  return state
}

// Answer
// const helloReducer = (state, action) => {
//   if (state.value === 'Hello') {
//     return { ...state, value: state.value + ' World!'}
//   }
//   return state
// }

// D1 (infinite render)
// const helloReducer = (state, action) => {
//   if (state.value === 'Hello') {
//     return { ...state, value: state.value + ' World!'}
//   }
//   return { ...state }
// }

// D2 (same thing, but as a switch)
// const helloReducer = (state, action) => {
//   switch (action.type) {
//     case 'addWorld':
//       if (state.value === 'Hello') {
//         state.value = state.value + ' World!'
//         return state
//       }
//       break
//     default:
//       return state
//   }
// }

// D3
// const lazyInitializer = (initState) => ({ value: initState.value })

// const helloReducer = (state, action, init=lazyInitializer) => {
//   if (state.value === 'Hello') {
//     state.value = state.value + ' World!'
//     return state
//   }
//   return state
// }

function HelloWorld() {
  const [message, dispatch] = useReducer(helloReducer, initialState)

  useEffect(() => {
    dispatch({ type: 'addWorld' })
  }, [message])

  return <div>{message.value}</div>
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById('root')
);
