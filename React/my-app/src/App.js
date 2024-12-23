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
// import React, { useState } from "react";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login submitted");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }; // Initialize state with a 'count' property
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 }); // Update state to increase 'count' by 1
//   };

//   render() {
//     return (
//       <div>
//         <h1>Simple Counter</h1>
//         <p>Current count: {this.state.count}</p>{" "}
//         {/* Display the current count */}
//         <button onClick={this.increment}>Increase Count</button>{" "}
//         {/* Button to trigger increment */}
//       </div>
//     );
//   }
// }

// // export default Counter;
// import React, { Component } from "react";

// // Child component
// class Child extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { clicks: 0 };
//   }

//   handleClick = () => {
//     this.setState({ clicks: this.state.clicks + 1 });
//   };
// }

// export default Parent;
import React, { useState } from "react";

const TodoApp = () => {
  const [todos, SetTodos] = useState([]);
  const [input, setInput] = useState("");

  // add a new todo (Create)
  const addTodo = () => {
    if (input.trim()) {
      SetTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };
  // Toggle a todo completed state (Update)
  const toggleTodo = (id) => {
    SetTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo (Delete)
  const deleteTodo = (id) => {
    SetTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo} style={{ marginLeft: "10px" }}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
