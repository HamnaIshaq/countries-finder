import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(countries => {
      this.setState({ countries: countries })
    })
    
  }

  render() {
    const { countries } = this.state;

    return(
      <div className="tc">
        <h1 className='f1'>Hello</h1>
        <CardList countries={countries}/>
      </div>
    );
  }
}
//<Card countries={this.state.countries}/>
export default App;
