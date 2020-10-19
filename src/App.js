import React, { Component } from "react";
import "./App.css";
import Input from "./components/input/input";
import RandNumber from "./components/randNumber/randNumber";

class App extends Component {
  state = {
    min: 1,
    max: 10000,
    number: 1,
    randonNumbers: [],
  };

  componentDidMount() {
    this.getInputs();
    // console.log('ComponentDidMount', this.state.number)
  }

  //Setstate for minimum number
  minChange = (event) => {
    this.setState({
      min: event.target.value,
      // randonNumbers: []
    });
  };

  //Setstate for maximum number
  maxChange = (event) => {
    this.setState({
      max: event.target.value,
      // randonNumbers: []
    });
  };

  generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  getInputs = () => {
    if (this.state.max > this.state.min) {
      const minTemp = this.state.min;
      const maxTemp = this.state.max;

      this.setState(
        {
          min: minTemp,
          max: maxTemp,
        },
        () => {
          let randomNumber = this.generateNumber(
            this.state.min,
            this.state.max
          );
          let allRandomNumbers = this.state.randonNumbers;
          let randomNumbersList = allRandomNumbers.filter((num) => {
            if (num >= minTemp && num <= maxTemp) {
              return num;
            }
          });
          while (
            this.checkRandomNumberIsUnique(randomNumber, randomNumbersList) ===
            false
          ) {
            randomNumber = this.generateNumber(this.state.min, this.state.max);
            if (randomNumbersList.length === maxTemp) {
              alert("There is no new random number to display!");
              break;
            }
          }
          if (randomNumbersList.length !== maxTemp) {
            allRandomNumbers.push(randomNumber);
            this.setState({
              number: randomNumber,
              randonNumbers: allRandomNumbers,
            });
            // console.log('minTemp > maxTemp', randomNumbersList);
            // console.log('minTemp > maxTemp', this.state.randonNumbers);
          }
        }
      );
      // console.log('minTemp > maxTemp', this.state.number)
    } else {
      alert("Min should be lower than your max!!!");
    }
    //  console.log('minTemp < maxTemp', this.state.number)
  };

  checkRandomNumberIsUnique(randomNumber, randomNumbersList) {
    let response = true;
    for (let index = 0; index < randomNumbersList.length; index++) {
      if (randomNumbersList[index] === randomNumber) {
        console.log("It exists!, ", randomNumber);
        response = false;
        break;
      }
    }
    return response;
  }

  render() {
    // console.log(this.state.number)

    return (
      <div className="App" id="generator">
        <div id="inputContainer">
          <RandNumber randNumber={this.state.number} />

          <Input
            min={this.state.min}
            minChange={this.minChange}
            max={this.state.max}
            maxChange={this.maxChange}
            getInputs={this.getInputs}
          />
        </div>
      </div>
    );
  }
}

export default App;
