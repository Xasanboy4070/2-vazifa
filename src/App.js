import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
    number: 0,
    seconds: 0,
    disabledDec: false,
    disabledInc: false,
  };
  handleNumber(e) {
    this.setState({ number: Math.floor(Number(e.target.value)) });
  }
  handleSeconds(e) {
    this.setState({ seconds: Math.floor(Number(e.target.value)) });
  }

  handleDec = () => {
    this.setState({ disabledDec: true });
    setTimeout(() => {
      this.setState({ count: this.state.count + this.state.number });
      console.log("Inc click");
      this.setState({ disabledDec: false });
    }, Number(this.state.seconds * 1000));
  };

  handleInc = () => {
    this.setState({ disabledInc: true });
    setTimeout(() => {
      this.setState({ count: this.state.count - this.state.number });
      console.log("Inc click");
      this.setState({ disabledInc: false });
    }, Number(this.state.seconds * 1000));
  };

  render() {
    return (
      <>
        <div className="inputs">
          <input
            type="number"
            placeholder="seconds"
            onChange={(e) => {
              this.handleSeconds(e);
            }}
          />
          <input
            type="number"
            placeholder="number"
            onChange={(e) => {
              this.handleNumber(e);
            }}
          />
        </div>
        <div className="btns">
          <div>
            <div className="anime">
              <div className="colorDec animeDec"></div>
            </div>
            <button
              disabled={this.state.disabledDec ? true : false}
              onClick={this.handleDec}
              style={{
                backgroundColor: this.state.disabledDec ? "red" : "blue",
              }}
            >
              Dec
            </button>
          </div>
          <span>{this.state.count}</span>
          <div>
            <div className="anime">
              <div className="colorInc animeInc"></div>
            </div>
            <button
              disabled={this.state.disabledInc ? true : false}
              onClick={this.handleInc}
              style={{
                backgroundColor: this.state.disabledInc ? "red" : "blue",
              }}
            >
              Inc
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
