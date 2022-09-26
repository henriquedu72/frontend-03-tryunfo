import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="name">
            <input id="name" name="name" type="text" data-testid="name-input" />
          </label>
          <label htmlFor="description">
            <input
              id="description"
              name="description"
              type="textarea"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1">
            <input id="attr1" name="atributo1" type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            <input id="attr2" name="atributo2" type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            <input id="attr3" name="atributo3" type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="image">
            <input id="image" name="image" type="text" data-testid="image-input" />
          </label>
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input type="checkbox" data-testid="trunfo-input" />
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
