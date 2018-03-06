import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart/Chart';

class App extends Component {
  chart = {
    columns: [{
      title: 'AAAAA',
      cards: []
    }, {
      title: 'BBBBB',
      cards: []
    }]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Firebase-Kanban Chart</h1>
        </header>
        <Chart chart={this.chart}/>
      </div>
    );
  }
}

export default App;
