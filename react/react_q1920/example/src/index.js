import React from 'react'
import ReactDOM from 'react-dom'

// eslint-disable-next-line
class RandomDog extends React.Component {
  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({ dogUrl: data.message })
    })
  }
  
  componentDidMount() {
    this.fetchDog()
  }

  render() {
    if (this.state && this.state.dogUrl) {
      return <img src={this.state.dogUrl} alt='random' />
    }
    return <h3>Loading...</h3>
  }
}

// eslint-disable-next-line
class RandomDog1 extends React.Component {
  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({ dogUrl: data.message })
    })
  }
  
  render() {
    this.fetchDog()

    if (this.state && this.state.dogUrl) {
      return <img src={this.state.dogUrl} alt='random' />
    }
    return <h3>Loading...</h3>
  }
}

// eslint-disable-next-line
class RandomDog2 extends React.Component {
  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({ dogUrl: data.message })
    })
  }
  
  componentWillUpdate() {
    this.fetchDog()
  }

  render() {
    if (this.state && this.state.dogUrl) {
      return <img src={this.state.dogUrl} alt='random' />
    }
    return <h3>Loading...</h3>
  }
}

// eslint-disable-next-line
class RandomDog3 extends React.Component {
  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({ dogUrl: data.message })
    })
  }
  
  shouldComponentUpdate() {
    this.fetchDog()
  }

  render() {
    if (this.state && this.state.dogUrl) {
      return <img src={this.state.dogUrl} alt='random' />
    }
    return <h3>Loading...</h3>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <RandomDog />
  </React.StrictMode>,
  document.getElementById('root')
);
