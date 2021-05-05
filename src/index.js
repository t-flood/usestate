import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class OneTimeButton extends React.Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.props.onClick();

    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.state.clicked}>
        You can only click me once
      </button>
    );
  }
}

ReactDOM.render(
  <OneTimeButton onClick={() => alert("hi")} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
