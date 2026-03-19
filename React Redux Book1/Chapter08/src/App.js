import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import { Component } from "react";
import { Button } from 'react-bootstrap'; 
import Rating from "./Rating";
import { IoIosStar, IoIosStarOutline } from 'react-icons/io' 
import Product from "./Product";
import JumboTronComponent from "./JumboTronComponent";
import UserForm from "./UserForm";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GitHubUser from './GitHubUser'; 

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


class App extends Component { 
  render(){

  return (
    <div>      
      {/* EXAMPLE1: hardcoding jumboton content in its own component */}
      {/* <JumboTronComponent/> */}

       {/* EXAMPLE2: Pass content to jumbotron */}
      {/* <JumboTronComponent body="Inserting content into component"/> */}

      {/* EXAMPLE3: Passing content from outside component via props object */}
      {/* <JumboTronComponent>
        This is a long sentence, and I want to insert content into the jumbotron component from the outside
      </JumboTronComponent>
      <UserForm />
      <Products/> */}
      {/* <GitHub /> */}
      <Header />
    </div>
  );
}
}

export default App;

class Header extends Component { 
  render(){ 
    return ( 
        <BrowserRouter> 
          <div>
            <Navbar bg="light" expand="lg"> 
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> 
              <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
              <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav className="mr-auto"> 
              <Nav.Link href="/">Home</Nav.Link> 
              <Nav.Link href="/github">GitHub</Nav.Link> 
              <Nav.Link href="/about">About</Nav.Link>                   
              </Nav> 
              </Navbar.Collapse> 
              </Navbar> 
                    
            <Routes> 
              <Route path="/github/user/:login/:id" element={<GitHubUser />} />
              <Route path="/about" element={<About />} />               
              <Route path="/github" element={<GitHub />} />               
              <Route exact path="/" element={<Home />} />              
              <Route path="/*" element={<NotFound />} />                        
            </Routes>    
          </div>   
        </BrowserRouter>               
    ); 
  } 
}

class Home extends Component { 
  render(){ 
    return ( 
      <div> 
        Home         
      </div> 
    ) 
  } 
} 
 
class NotFound extends Component { 
  render(){
    return <div>Not Found</div> 
    } 
} 
class About extends Component { 
  render(){
    return <div>About</div> 
    } 
} 