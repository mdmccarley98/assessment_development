import React, { 
  useRef, 
  useState, 
} from 'react';
import ReactDOM from 'react-dom';

// Answer
const MyText = React.forwardRef((props, ref) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)

  return <input ref={ref} type='text' value={value} onChange={handleChange} />
})

// Distractor #1
// function MyText({ref}) {
//   const [value, setValue] = useState('')
//   const handleChange = (e) => setValue(e.target.value)

//   return <input ref={ref} type='text' value={value} onChange={handleChange} />
// }

// Distractor #2
// function MyText(props, ref) {
//   const [value, setValue] = useState('')
//   const handleChange = (e) => setValue(e.target.value)

//   return <input ref={ref} type='text' value={value} onChange={handleChange} />
// }

// Distractor #3
// Refs are forwarded automatically
// function MyText() {
//   const [value, setValue] = useState('')
//   const handleChange = (e) => setValue(e.target.value)

//   return <input type='text' value={value} onChange={handleChange} />
// }

function MyApp() {
  const ref = useRef()

  const focusOnText = () => ref.current.focus()

  return (
    <div>
      <MyText ref={ref} />
      <button onClick={focusOnText}>Focus on Text</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);
