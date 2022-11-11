import React, { 
  // useEffect, 
  useRef 
} from 'react';
import ReactDOM from 'react-dom';

// Answer
function ListItems({ showItems }) {
  const refs = [
    useRef(),
    useRef(),
    useRef()
  ]

  if (showItems) {
    return refs.map((ref, index) => (
      <li ref={ref}>List item: {index}</li>
    ))
  }

  return null
}

// Distractor #1
// function ListItems({ showItems }) {
//   let refs = []
//   for (let i = 0; i < 3; i++) {
//     refs[i] = useRef()
//   }

//   if (showItems) {
//     return refs.map((ref, index) => (
//       <li ref={ref}>List item: {index}</li>
//     ))
//   }

//   return null
// }

// Distractor #2
// function ListItems({ showItems }) {
//   let refs = []

//   if (showItems) {
//     refs = [
//       useRef(),
//       useRef(),
//       useRef()
//     ]

//     return refs.map((ref, index) => (
//       <li ref={ref}>List item: {index}</li>
//     ))
//   }

//   return null
// }

// Distractor #3
// function ListItems({ showItems }) {
//   let refs = []

//   useEffect(() => {
//       ref[0] = useRef()
//       ref[1] = useRef()
//       ref[2] = useRef()
//   })

//   if (showItems) {
//     return refs.map((ref, index) => (
//       <li ref={ref}>List item: {index}</li>
//     ))
//   }

//   return null
// }

ReactDOM.render(
  <React.StrictMode>
    <ul>
      <ListItems showItems={true} />
    </ul>
  </React.StrictMode>,
  document.getElementById('root')
);
