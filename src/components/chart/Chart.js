import React, { Component } from 'react';
import './Chart.css';
import Column from '../column/Column';

class Chart extends Component {

  renderColumns = this.props.chart.columns.map(
    column => {
      return (<Column column={column} />)
    }
  )

  render() {
    return (
      <div>
        <div className="ChartHeader">
          <h4>Task Board</h4>
          <button>+</button>
        </div>
        <br/>
        <div className="Chart"> 
          {this.renderColumns}
        </div>
      </div>
    )
  }
}

export default Chart;