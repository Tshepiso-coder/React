import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import { Component } from "react";
import { Button } from 'react-bootstrap'; 
import Rating from "./Rating";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io' 
import Product from "./Product";

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
// </div>
// );
// }
// }
// EXAMPLE 3
function App() {
  const isValid = true;
  return (
    <div>
      <Products />
    </div>
  );
}

export default App;
