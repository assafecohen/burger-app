import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    placeholder: 'Please Enter your text',
    inputText: '',
    labelColor: 'red'
  }

  changeInputHandler = (e) => {
    const inputText = e.target.value;
    let color;
    console.log(inputText.length)
    switch (true) {
      case (inputText.length < 5): color = "orange"
        break;
      case (inputText.length < 10): color = "pink"
        break;
      case inputText.length < 15: color = "red"
        break;
      default:
        alert("none");
    }
    this.setState({ inputText: inputText, labelColor: color });
  }

  render() {

    return (
      <div className="App">

      </div>

    )
  };



}

export default App;
