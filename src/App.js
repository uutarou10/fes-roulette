import React from 'react';
import './App.css';

class App extends React.Component {
  timerId = null;

  constructor(props) {
    super(props);
    this.state = {
      names: [],
      currentIndex: 0,
      textAreaInput: ""
    }
  }

  onStart = () => {
    this.timerId = setInterval(() => {
      this.setState({
        currentIndex: Math.floor(Math.random() * this.state.names.length)
      });
    }, 100);
  }

  onStop = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  onInputNameTextArea = (e) => {
    this.setState({textAreaInput: e.target.value});
  }

  onSubmitNames = () => {
    const names = this.state.textAreaInput.split('\n');
    this.setState({names});
  }

  render() {
    if (this.state.names.length < 1) {
      return (
        <div>
          <textarea onInput={this.onInputNameTextArea} />
          <button onClick={this.onSubmitNames}>OK</button>
        </div>
      );
    }

    return (
      <div className="container">
        <div>
          <div className="name">{this.state.names[this.state.currentIndex]}</div>
          <div className="buttonContainer">
            <button onClick={this.onStart}>Start!</button>
            <button onClick={this.onStop}>Stop!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
