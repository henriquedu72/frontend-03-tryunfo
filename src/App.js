import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      buttonDisabled: true,
      cardsList: [],
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

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  handleChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.shouldEnableSaveButton());
  };

  handleClick = () => {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardTrunfo } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };
    if (cardTrunfo === true) {
      this.setState({
        trunfoSelected: true,
      });
    }
    this.setState((prevState) => ({
      cardsList: [...prevState.cardsList, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // buttonDisabled: true,
    }));
  };

  removeButton = (card) => {
    const { cardsList } = this.state;
    const result = cardsList.filter((param) => param.cardName !== card.cardName
    && param.cardDescription !== card.cardAttr1
    && param.cardDescription !== card.cardRare);
    if (card.cardTrunfo === true) {
      this.setState({
        trunfoSelected: false,
      });
    }
    this.setState({ cardsList: [...result] });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, buttonDisabled, trunfoSelected, cardsList } = this.state;
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
          trunfoSelected={ trunfoSelected }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ buttonDisabled }
          onSaveButtonClick={ this.handleClick }
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
        <div>
          {' '}
          { cardsList.map((card, index) => (
            <div
              key={ index }
            >
              <Card
                cardName={ card.cardName }
                cardImage={ card.cardImage }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              {' '}
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.removeButton(card) }
              >
                Excluir
              </button>

            </div>))}
        </div>
        {' '}
      </div>
    );
  }
}

export default App;
