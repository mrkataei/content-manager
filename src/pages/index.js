import React, { useState } from "react";

function CompA() {
  return (
    <div class="float-container">
      <div class="float-child">
        <div class="green">Float Column 1</div>
      </div>
      <div class="float-child">
        <div class="blue">Float Column 2</div>
      </div>
    </div>
  );
}

function CompB() {
  return <h1>CompB</h1>;
}

class CompC extends React.Component {
  state = {
    myValue: 10,
  };

  changeState(incrementor) {
    // console.log(incrementor);
    this.setState({
      myValue: incrementor,
    });
  }
  render() {
    return (
      <>
        <h1>CompC</h1>
        current state : <h1>{this.state.myValue}</h1>
        <button onClick={() => this.changeState(this.state.myValue + 1)}>
          +
        </button>
        <button onClick={() => this.changeState(this.state.myValue - 1)}>
          -
        </button>
      </>
    );
  }
}

const CompD = () => {
  return <div>I am arrow function</div>;
};

const CompH = (_) => {
  return <div>I am arrow function</div>;
};

const CompG = (params) => {
  return <div>I am arrow function</div>;
};

function CompI() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "JSX"),
    React.createElement(CompD)
  );
}
export default function Home() {
  const valueState = useState(10);
  const [value, setValue] = useState(20);
  console.log(valueState);
  console.log(valueState[0]);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <div>
      valueState: {valueState[0]}
      <br></br>
      valueState: <h1>{value}</h1>
      <button onClick={increment}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <h1>Hello world!</h1>
      <CompA />
      <CompB />
      <CompC />
      <CompD />
      <CompI />
    </div>
  );
}
