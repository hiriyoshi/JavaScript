import React from "react";

const App = () => {
  const isUserLoggedIn = true;
  const userList = ["John", "Jane", "Alex"];

  return (
    <div>
      <h1>Welcome, {isUserLoggedIn ? "User" : "Guest"}</h1>
      <ul>
        {userList.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <style>
        {`
        h1 {
        color: blue;
        }
        `}
      </style>
    </div>
  );
};

export default App;
