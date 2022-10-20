import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      buttonDisabled: true,
    };
  }

  shouldEnableSaveButton = () => {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const maxValue = 90;
    const sumOfAttr = 210;
    // const typedCardName = cardName !== '';
    // const typedCardDescription = cardDescription !== '';
    // const typedCardImage = cardImage !== '';
    const typedCard = cardName === '' || cardDescription === '' || cardImage === '';
    // const typedCardAttr1 = attr1 <= maxValue && attr1 > 0;
    // const typedCardAttr2 = attr2 > 0 && attr2 <= maxValue;
    // const typedCardAttr3 = attr3 > 0 && attr3 <= maxValue;
    const typedMin = attr1 < 0 || attr2 < 0 || attr3 < 0;
    const typedMax = attr1 > maxValue || attr2 > maxValue || attr3 > maxValue;
    const sumOfAttrTyped = attr1 + attr2 + attr3 > sumOfAttr;

    this.setState({ buttonDisabled: typedMin || typedMax
      || typedCard || sumOfAttrTyped });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => this.shouldEnableSaveButton());
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.state;
    const { cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    // const { isSaveButtonDisabled, onSaveButtonClick } = this.state;
    const { buttonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <h2>Adicione uma Nova Carta</h2>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ buttonDisabled }
        />
        <h2>Preview</h2>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
