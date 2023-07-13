import React from "react";

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
  render() {
    return <h1>CompC</h1>;
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
  return (
    <div>
      <h1>Hello world!</h1>
      <CompA />
      <CompB />
      <CompC />
      <CompD />
      <CompI />
    </div>
  );
}
