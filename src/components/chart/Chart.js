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
    this.addCard = this.addCard.bind(this);
  }

  componentWillUpdate() {
    console.log(this.state.columns);
  }

  addOneTaskColumn(e) {
    this.setState(
      prevState => prevState.columns.push({title: 'DDDD', cards: []})
    );
  }

  addCard(sourceColumnId, sourceCardId, destColumnId) {
    console.log(sourceColumnId, sourceCardId, destColumnId);
    let columns = this.state.columns;
    let sourceCard = columns[sourceColumnId].cards[sourceCardId];
    
    columns[destColumnId].cards = columns[destColumnId].cards.concat(sourceCard);
    columns[sourceColumnId].cards.splice(sourceCardId, 1);
    // console.log(columns);
    this.setState({columns: columns});
  }

  render() {
    let columns = this.state.columns;
    console.log(columns);
    return (
      <div>
        <div className="ChartHeader">
          <h4>Task Board</h4>
          <button onClick={this.addOneTaskColumn}>+</button>
        </div>
        <br/>
        <div className="Chart"> 
          {columns.map(
            (column, index) => 
              <Column
                id={index} 
                className="Chart"
                key={index} 
                column={column}
                onDropCard={this.addCard} />
          )}
        </div>
      </div>
    )
  }
}

export default Chart;