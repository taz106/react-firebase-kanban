import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card
    }
    
    this.newCardTemplate = this.newCardTemplate.bind(this);
    this.cardTemplate = this.cardTemplate.bind(this);
  }

  newCardTemplate() {
    return (
      <div id={this.props.id} className="Card">
        <input type="text" />
        <br />
        <textarea></textarea>
        <div className="action-btns">
          <button className="save">Save</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    )
  }

  cardTemplate(card) {
    return (
      <div id={this.props.id} className="Card">
        <h3>{card.title}</h3>
        <div>{card.description}</div>
        <div className="action-btns">
          <button className="delete">Delete</button>
        </div>
      </div>
    )
  }
  
  render() {
    let card = this.state.card;
    // return (card.title.length) ? this.cardTemplate(card) : this.newCardTemplate();
    return (
      <div id={this.props.id} className="Card">
        <h3>{card.title}</h3>
        <div>{card.description}</div>
        <div className="action-btns">
          <button className="delete">Delete</button>
        </div>
      </div>
    )
  }
}

export default Card;