import React, { Component } from 'react';
import './Chart.css';
import Column from '../column/Column';

class Chart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      columns: props.chart.columns
    };
    this.addOneTaskColumn = this.addOneTaskColumn.bind(this);
  }

  addOneTaskColumn(e) {
    this.setState(
      prevState => prevState.columns.push({title: 'DDDD', cards: []})
    );
  }

  render() {
    let columns = this.state.columns;
    return (
      <div>
        <div className="ChartHeader">
          <h4>Task Board</h4>
          <button onClick={this.addOneTaskColumn}>+</button>
        </div>
        <br/>
        <div className="Chart"> 
          {columns.map((column, index) => <Column key={index} column={column} />)}
        </div>
      </div>
    )
  }
}

export default Chart;