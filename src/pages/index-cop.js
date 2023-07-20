import React, { useState, useEffect } from "react";

function CompA() {
  return (
    <div className="float-container">
      <div className="float-child">
        <div className="green">Float Column 1</div>
      </div>
      <div className="float-child">
        <div className="blue">Float Column 2</div>
      </div>
    </div>
  );
}

function CompB(props) {
  return (
    <>
      <div>my value: {props.Myprop1}</div>
      <div>my value: {<props.promp2 />}</div>
    </>
  );
}

className CompC extends React.Component {
  // state = {
  //   myValue: 10,
  // };

  constructor() {
    super();
    this.state = {
      myValue: 10,
    };
  }

  changeState(incrementor) {
    // console.log(incrementor);
    this.setState({
      myValue: incrementor,
    });
  }
  render() {
    const myValue = this.state.myValue;
    return (
      <>
        <h1>CompC</h1>
        current state : <h1>{myValue}</h1>
        <button onClick={() => this.changeState(myValue + 1)}>+</button>
        <button onClick={() => this.changeState(myValue - 1)}>-</button>
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

function CompI(props) {
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
  useEffect(
    ()=> {
      console.log("hi")
    }, [value]
  )
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
      <CompC />
      <CompD />
      <CompB Myprop1={value} promp2={() => <div>my new comp</div>} />
    </div>
  );
}
