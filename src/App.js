import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    widthInc: "0px",
    widthDec: "0px",
    transition: "0s",
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

  handleInc = () => {
    this.setState({ disabledInc: true });
    this.setState({ widthInc: "110px" });
    this.setState({ transition: `${this.state.seconds}s` });
    setTimeout(() => {
      this.setState({ count: this.state.count + this.state.number });
      console.log("Inc click");
      this.setState({ disabledInc: false });
      this.setState({ widthInc: "0px" });
      this.setState({ transition: "0s" });
    }, Number(this.state.seconds * 1000));
  };

  handleDec = () => {
    this.setState({ disabledDec: true });
    this.setState({ widthDec: "110px" });
    this.setState({ transition: `${this.state.seconds}s` });
    setTimeout(() => {
      this.setState({ count: this.state.count - this.state.number });
      console.log("Inc click");
      this.setState({ disabledDec: false });
      this.setState({ widthDec: "0px" });
      this.setState({ transition: "0s" });
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
              <div
                className="colorInc animeInc"
                style={{
                  width: `${this.state.widthInc}`,
                  transition: `${this.state.transition}`,
                }}
              ></div>
            </div>
            <button
              disabled={this.state.disabledInc ? true : false}
              onClick={this.handleInc}
              style={{
                backgroundColor: this.state.disabledInc ? "#1E1E3F" : "blue",
              }}
            >
              Inc
            </button>
          </div>
          <span>{this.state.count}</span>
          <div>
            <div className="anime">
              <div
                className="colorDec animeDec"
                style={{
                  width: `${this.state.widthDec}`,
                  transition: `${this.state.transition}`,
                }}
              ></div>
            </div>
            <button
              disabled={this.state.disabledDec ? true : false}
              onClick={this.handleDec}
              style={{
                backgroundColor: this.state.disabledDec ? "#1E1E3F" : "blue",
              }}
            >
              Dec
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
