import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import { Component } from "react";
import { Button } from 'react-bootstrap'; 
import Rating from "./Rating";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io' 

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
      {/* <Products />
      <Button variant="info" disabled={!isValid}>Default</Button> */}
      <Rating rating="1"/> 
      <Rating rating="2"/> 
      <Rating rating="3"/> 
      <Rating rating="4"/> 
      <Rating rating="5"/> 
    </div>
  );
}

export default App;
