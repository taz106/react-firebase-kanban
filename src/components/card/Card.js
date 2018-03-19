import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  
  render() {
    let card = this.props.card;
    return (
      <div className="Card">
        <h3>{card.title}</h3>
        <div>{card.description}</div>
      </div>
    )
  }
}

export default Card;