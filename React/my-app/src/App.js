import React from "react";

const App = () => {
  const greeting = "Hello, React!";

  return (
    <div>
      <h1>{greeting}</h1>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
};

const Welcome = (props) => {
  return <p>Welcome, {props.name}!</p>;
};

export default App;
