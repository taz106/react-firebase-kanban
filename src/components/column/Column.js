import React, { Component } from 'react';
import './Column.css';
import Card from '../card/Card';
import Draggable from 'react-draggable';
class Column extends Component {

  constructor(props) {
    super(props);
    this.state = {
      column: props.column
    };
    this.addOneCard = this.addOneCard.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  addOneCard() {
    this.setState(
      prevState => prevState.column.cards.push({
        title: 'New Added Card',
        description: 'Lorem Ipsum Dolor Site Emet Lorem Ipsum Dolor Site Emet Lorem Ipsum Dolor Site Emet'
      })
    )
  }

  handleStart(e) {
    console.log(e);
    console.log("drag start");
  }

  handleDrag(e) {
    console.log(e);
  }

  handleStop(e) {
    console.log('drag stop');
    console.log(e);
  }

  render() {
    let column = this.state.column;
    return (
      <div className="Column"> 
        <h3>{column.title}</h3>
        <button onClick={this.addOneCard}>+</button>
        <div>
          {column.cards.map((card, index) => 
            <Draggable
            key={index}
            allowAnyClick={false}
            handle=".dragStartEndAres"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
              <div className="dragStartEndAres">
                <Card key={index} card={card}/>
              </div>
            </Draggable>)
          }
        </div>
      </div>
    );
  }
}

export default Column;