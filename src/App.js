import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      isData: false
    }
  }

  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films').then(response => response.json()).then(data => this.setState({
      movies: data
    }))

    
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Body data={this.state.movies} isData={this.state.isData} className="bodyStyling"/>
      </div>
    );
  }
}

export default App;
