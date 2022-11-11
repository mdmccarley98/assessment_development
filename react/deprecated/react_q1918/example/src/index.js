import React from 'react'
import ReactDOM from 'react-dom'

// Stem
// function MyApp({ theme, children }) {
//   return (
//     <div className={theme}>{children}</div>
//   )
// }

// ReactDOM.render(
//   <MyApp theme='dark'>
//     <h1>Title</h1>
//     <h2>Sub-title</h2>
//   </MyApp>,
//   document.getElementById('root')
// )

// Answer
const e = React.createElement

function MyApp({ theme, children }) {
  return e('div', { theme }, children)
}

ReactDOM.render(
  e(MyApp, { theme: 'dark' },
    e('h1', {}, 'Title'),
    e('h2', {}, 'Sub-title')
  ),
  document.getElementById('root')
)

// D1 (Deprecated, but this works)
// const f = React.createFactory

// function MyApp({ theme, children }) {
//   return f('div')({ theme }, children)
// }

// ReactDOM.render(
//   f(MyApp)({},
//     f('h1')({}, 'Title'),
//     f('h2')({}, 'Sub-title')
//   ),
//   document.getElementById('root')
// )

// D2 (Executing Function Component)
// const e = React.createElement

// function MyApp({ theme, children }) {
//   return e('div', { theme }, children)
// }

// ReactDOM.render(
//   e(MyApp({ theme: 'dark' },
//     [
//       e('h1', {}, 'Title'),
//       e('h2', {}, 'Sub-title')
//     ]
//   )),
//   document.getElementById('root')
// )

// D3 (Trying to use function directly, weird binding, deprecated API)
// const f = React.createFactory

// function MyApp({ theme, children }) {
//   return f('div')({ theme }, children)
// }

// ReactDOM.render(
//   MyApp.bind(null, {
//     theme: 'dark',
//     children: [
//       f('h1')({}, 'Title'),
//       f('h2')({}, 'Sub-title')
//     ]
//   }),
//   document.getElementById('root')
// )