import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

const initState = {
  value: '',
  history: ['']
}

function undoTextReducer(state, { type, payload }) {
  switch (type) {
    case 'change':
      return {
        value: payload,
        history: [
          ...state.history,
          payload
        ]
      }
    // Answer
    case 'undo':
      if (state.history.length === 1) {
        return state
      } else {
        const newHistory = state.history.slice(0, -1)
        return {
          value: newHistory[newHistory.length - 1],
          history: newHistory
        }
      }
    // Distractor #1 (Altering state is bad)
    // case 'undo':
    //   if (state.history.length === 1) {
    //     return state
    //   } else {
    //     state.history = state.history.slice(0, -1)
    //     state.value = state.history[state.history.length - 1]
    //     return state
    //   }
    // Distractor #2 (Just a logic bug)
    // case 'undo':
    //   if (state.history.length === 1) {
    //     return state
    //   } else {
    //     return {
    //       value: state.history[state.history.length - 1],
    //       history: state.history.slice(0, -1)
    //     }
    //   }
    // Distractor #3 (Error on undo beyond history)
    // case 'undo':
    //   return {
    //     value: state.history[state.history.length - 2],
    //     history: state.history.slice(0, -1)
    //   }
    default:
      throw new Error('Invalid action: ' + type)
  }
}

function UndoTextInput() {
  const [state, dispatch] = useReducer(undoTextReducer, initState)
  const handleChange = e => dispatch({ type: 'change', payload: e.target.value })
  const handleUndo = () => dispatch({ type: 'undo' })

  return (
    <div>
      <input type='text' value={state.value} onChange={handleChange} />
      <input type='button' value='Undo' onClick={handleUndo} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <UndoTextInput />
  </React.StrictMode>,
  document.getElementById('root')
);
