import React, { useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

function LogEffects() {

  useEffect(() => {
    console.log('useEffect 1')
  })
 
  useLayoutEffect(() => {
    console.log('useLayoutEffect 1')
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2')
  })

  useEffect(() => {
    console.log('useEffect 2')
  })

  console.log('rendering')

  return <div>Hello</div>
 }


ReactDOM.render(
  <React.StrictMode>
    <LogEffects />
  </React.StrictMode>,
  document.getElementById('root')
);
