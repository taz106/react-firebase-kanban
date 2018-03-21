import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.newCardTemplate = this.newCardTemplate.bind(this);
    this.cardTemplate = this.cardTemplate.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.cancelCard = this.cancelCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  saveCard(ev) {
    console.log(ev)
    this.props.onSaveCard()
  }

  cancelCard() {

  }

  deleteCard() {

  }

  newCardTemplate() {
    return (
      <div id={this.props.id} className="Card">
        <input id="title" type="text" />
        <br />
        <textarea id="desc"></textarea>
        <div className="action-btns">
          <button className="save" onClick={this.saveCard}>Save</button>
          <button className="cancel" onClick={this.cancelCard}>Cancel</button>
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
          <button className="delete" onClick={this.deleteCard}>Delete</button>
        </div>
      </div>
    )
  }
  
  render() {
    let card = this.props.card;
    return (card.title.length)? this.cardTemplate(card) : this.newCardTemplate();
  }
}

export default Card;