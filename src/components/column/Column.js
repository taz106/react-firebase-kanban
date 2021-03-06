import React, { Component } from 'react';
import './Column.css';
import Card from '../card/Card';
class Column extends Component {

  constructor(props) {
    super(props);
    this.state = {
      column: props.column
    };
    this.addOneCard = this.addOneCard.bind(this);
    this.saveOneCard = this.saveOneCard.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  addOneCard(ev) {
    this.setState(
      prevState => prevState.column.cards.push({
        title: '',
        description: ''
      })
    )
  }

  saveOneCard(ev) {
    console.log('saving');
    
  }

  handleStart(ev) {
    let columnId = this.props.id;
    let cardId = ev.target.id;
    ev.dataTransfer.setData('text/plain', `${columnId}-${cardId}`);
  }

  handleDrag(ev) {
    ev.preventDefault();
  }

  handleDrop(ev) {
    let [columnId, cardId] = ev.dataTransfer.getData('text/plain').split('-');
    ev.dataTransfer.clearData();
    
    let destColumnId = ev.currentTarget.id;
    this.props.onDropCard(columnId, cardId, destColumnId);
  }

  render() {
    let column = this.state.column;
    return (
      <div id={this.props.id} className="Column" onDragOver={this.handleDrag} onDrop={this.handleDrop}> 
        <h3>{column.title}</h3>
        <button onClick={this.addOneCard}>+</button>
        <div>
          {column.cards.map((card, index) =>
            <div id={index} key={index} draggable="true" onDragStart={this.handleStart}>
              <Card 
                id={index} 
                card={card}
                onSaveCard={this.saveOneCard} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Column;