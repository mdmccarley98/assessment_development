import React from 'react';
import ReactDOM from 'react-dom';

const nauticalTerms = [
  { word: 'abaft', definition: 'Toward the stern, relative to some object (e.g. "abaft the cockpit").' },
  { word: 'abeam', definition: 'On the beam, a relative bearing at right angles to the ship\'s keel.' },
  { word: 'aboard', definition: 'On or in a vessel.' }
]

function Dictionary({ terms, renderEntry }) {
  return (
    <dl>
      {terms.map(renderEntry)}
    </dl>
  )
}

// Answer
function renderEntry({ word, definition }) {
  return (
    <React.Fragment key={word}>
      <dt>{word}</dt>
      <dd>{definition}</dd>
    </React.Fragment>
  )
}

// D1 (no key provided)
// function renderEntry({ word, definition }) {
//   return (
//     <>
//       <dt>{word}</dt>
//       <dd>{definition}</dd>
//     </>
//   )
// }

// D2 (no fragment)
// function renderEntry({ word, definition }) {
//   return (
//     <dt>{word}</dt>
//     <dd>{definition}</dd>
//   )
// }

// D3 (breaks semantics by adding 'div')
// function renderEntry({ word, definition }) {
//   return (
//     <div key={word}>
//       <dt>{word}</dt>
//       <dd>{definition}</dd>
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <Dictionary terms={nauticalTerms} renderEntry={renderEntry} />
  </React.StrictMode>,
  document.getElementById('root')
);
