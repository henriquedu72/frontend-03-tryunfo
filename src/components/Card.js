import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardDescription, cardRare, cardTrunfo } = this.props;
    return (
      <section>
        <p data-testid="name-card">{ cardName }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string,
  cardImage: propTypes.string,
  cardDescription: propTypes.string,
  cardAttr1: propTypes.string,
  cardAttr2: propTypes.string,
  cardAttr3: propTypes.string,
  cardRare: propTypes.string,
  cardTrunfo: propTypes.bool,
}.irRequire;

export default Card;
