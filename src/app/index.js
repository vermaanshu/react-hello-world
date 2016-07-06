import React from "react";
import { render } from "react-dom";
import Like from "./components/Like.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, do you like this?</p>
        <Like />
      </div>);
  }
}

render(<App />, document.getElementById('app'));
