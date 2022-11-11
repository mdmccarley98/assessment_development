import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello'

ReactDOM.render(
  <React.StrictMode>
    <Hello name="World" />
  </React.StrictMode>,
  document.getElementById('root')
);
