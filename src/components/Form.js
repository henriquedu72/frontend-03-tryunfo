import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { onInputChange, cardName, cardDescription, cardAttr1, cardAttr2 } = this.props;
    const { cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description">
            <input
              id="description"
              name="description"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1">
            <input
              id="attr1"
              name="atributo1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2">
            <input
              id="attr2"
              name="atributo2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3">
            <input
              id="attr3"
              name="atributo3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image">
            <input
              id="image"
              name="image"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string,
  onInputChange: propTypes.func,
  cardDescription: propTypes.string,
  cardAttr1: propTypes.string,
  cardAttr2: propTypes.string,
  cardAttr3: propTypes.string,
  cardImage: propTypes.string,
  cardRare: propTypes.string,
  cardTrunfo: propTypes.bool,
  isSaveButtonDisabled: propTypes.bool,
  onSaveButtonClick: propTypes.bool,
}.irRequire;

export default Form;
