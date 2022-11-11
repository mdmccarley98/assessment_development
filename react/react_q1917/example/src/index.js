import React from 'react';
import ReactDOM from 'react-dom';

function Article(props) {
  return (
    <div className='article'>
      {props.children}
    </div>
  )
}

function NewsSite() {
  return (
    <Article>
      <h1 className='title'>Go To Statement Considered Harmful</h1>
      <section className='intro'>For a number of years I have been familiar with ...</section>
      <section className='content'>For a number of years I have been familiar with ...</section>
    </Article>
  )
}

ReactDOM.render(
  <NewsSite />,
  document.getElementById('root')
);
