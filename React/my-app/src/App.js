// import React from "react";

// const App = () => {
//   const greeting = "Hello, React!";

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <Welcome name="Alice" />
//       <Welcome name="Bob" />
//     </div>
//   );
// };

// const Welcome = (props) => {
//   return <p>Welcome, {props.name}!</p>;
// };

// export default App;

// import React from "react";

// const App = () => {
//   const isUserLoggedIn = true;
//   const userList = ["John", "Jane", "Alex"];

//   return (
//     <div>
//       <h1>Welcome, {isUserLoggedIn ? "User" : "Guest"}</h1>
//       <ul>
//         {userList.map((user) => (
//           <li key={user}>{user}</li>
//         ))}
//       </ul>
//       <style>
//         {`
//         h1 {
//         color: blue;
//         }
//         `}
//       </style>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default App;
/*
What is Hook?
- Hook allows us to 'hook' into react features such as using state and life cycle methods

Importing useState > import { useState } from "react"
*/
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
