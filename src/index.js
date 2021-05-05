import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    onClick();

    setClicked(true);
  };

  return (
    <button onClick={handleClick} disabled={clicked}>
      You can only click me once
    </button>
  );
}

ReactDOM.render(
  <OneTimeButton onClick={() => alert("hi")} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
