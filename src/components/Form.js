import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { onInputChange, cardName, cardDescription, cardAttr1, cardAttr2 } = this.props;
    const { cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    const { isSaveButtonDisabled, onSaveButtonClick, hasTrunfo } = this.props;

    // let error = undefined;
    // if (value.length > 120) error = 'Texto muito grande!';
    return (
      <section>
        <form>
          <label htmlFor="name">
            Nome
            <input
              id="name"
              required
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
            {/* // <span>{error ? error : ''}</span> */}
          </label>

          <label htmlFor="description">
            Descrição
            <input
              id="description"
              required
              name="cardDescription"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1">
            attr1
            <input
              id="attr1"
              name="cardAttr1"
              required
              min="0"
              max="90"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2">
            attr2
            <input
              id="attr2"
              name="cardAttr2"
              required
              min="0"
              max="90"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3">
            attr3
            <input
              id="attr3"
              name="cardAttr3"
              required
              min="0"
              max="90"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image">
            imagem
            <input
              id="image"
              required
              name="cardImage"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          Raridade
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>

          {(hasTrunfo ? <p> Você já tem um Super Trunfo em seu baralho </p> : (
            <label htmlFor="trunfo">
              Supertrunfo
              <input
                type="checkbox"
                name="cardTrunfo"
                id="trunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
              />
            </label>))}

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
  hasTrunfo: propTypes.bool,
  isSaveButtonDisabled: propTypes.bool,
  onSaveButtonClick: propTypes.bool,
}.irRequire;

export default Form;
