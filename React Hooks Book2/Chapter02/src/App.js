import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
//import { Component } from "react";

// EXAMPLE 1
// function App() {
//   return (
//     <div className="App">
//       <h1>
// My Second React App!
// </h1>
// <Products />
// <Products />
// <Products />
//     </div>
//   );
// }

// EXAMPLE 2
// class App extends Component {

//   formatName(user){
//   return user.firstName + ' ' + user.lastName;
//   }

//   render() {
//   const user ={
//   firstName:'Tracy',
//   lastName:'September'
//   };

//   return (
//   <div>
//   <h1>Hello, {this.formatName(user)}</h1>
// </div>3
// );
// }
// }

// ===================
// Summary from Claude.ai
// This is a simple React application entry point.
// App Component is the root component that renders a <Products /> component wrapped inside a <div>. 
// It then exports App as the default export, making it available to be mounted by the React entry file 
// (e.g., main.jsx or index.js).

// In short: the app's sole purpose is to display the Products component.
// ===================

// EXAMPLE 3
function App() {
  return (
    <div>
      <Products />
    </div>
  );
}

export default App;
