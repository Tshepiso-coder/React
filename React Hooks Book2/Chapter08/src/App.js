import React, { useReducer } from 'react'; 
import ToDoList from './ToDoList'; 
import { v4 as uuidv4 } from 'uuid';

const todosInitialState = {
  todos:[{ id:1, text: "finishing writing hooks chapter"}, 
    { id:2, text: "play with kids"}, 
    { id:3, text: "read bible"},
  ] 
};

export const TodosContext = React.createContext();

function App (){ 
const [state, dispatch] = useReducer(todosReducer,todosInitialState) 
return ( 
  <TodosContext.Provider value={{state,dispatch}}>
    <ToDoList />
  </TodosContext.Provider>     
) 
}

function todosReducer(state, action){  
switch(action.type){  
  case 'edit':    
    const updatedToDo = {...action.payload}  
    const updatedToDoIndex = state.todos.findIndex(
      (t) => t.id === action.payload.id);
    const updatedToDos = [ 
      ...state.todos.slice(0,updatedToDoIndex), 
      updatedToDo, 
      ...state.todos.slice(updatedToDoIndex + 1) 
    ]; 
    return {...state, todos: updatedToDos}
    case 'add': 
      const newToDo = {id: uuidv4(), text: action.payload} 
      // add new todo onto array 
      const addedToDos = [...state.todos,newToDo] 
      // spread our state and assign todos 
      return {...state,todos:addedToDos} 

    case 'delete': 
      const filteredTodoState = state.todos.filter( 
        (todo) => todo.id !== action.payload.id,
    ); 
    return {...state, todos: filteredTodoState}

default: 
return todosInitialState 
} 
} 


export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import Products from "./Products";
// import { Component, useContext } from "react";
// import React, {useReducer} from 'react';
// import { Button } from 'react-bootstrap'; 
// import Rating from "./Rating";
// import { IoIosStar, IoIosStarOutline } from 'react-icons/io' 
// import Product from "./Product";
// import JumboTronComponent from "./JumboTronComponent";
// import UserForm from "./UserForm";
// import GitHub from "./GitHub";
// import { UserContext } from ".";


// const initialState = { 
// count: 0 
// } 

// function App(props) {
//   const value = useContext(UserContext);

//   const [state, dispatch] = useReducer(reducer,initialState);
//   return (
//     <div>
//       {/* Example 1: Props Drilling */}
//       {/* {props.username} */}
//       {/* Example 2: Consuming Data from Context Object */}     
//       <UserContext.Consumer> 
//       {value => <div>Received, {value}</div>} 
//       </UserContext.Consumer> 
//       {/* Example 3:Using useContext Hook */}
//       {/* 2. Received, {value} */}

//     Count: {state.count};
//     <br /> 
//     <Button onClick={() => dispatch({type: 'increment'})}>
//     Increment 
//     </Button> 
//     <Button variant="secondary" onClick={() => dispatch({type: 
//     'decrement'})}> 
//     Decrement 
//     </Button> 
//     <Button variant="success" onClick={() => dispatch({type: 
//     'reset'})}> 
//     Reset 
//     </Button> 

//     </div>
//   );
// }

// export default App;

// function reducer(state, action){  
//   switch(action.type){  
//     case "increment": 
//       return {count : state.count + 1}  
//     case "decrement": 
//       return {count : state.count - 1}  
//     case "reset": 
//       return initialState
//     default:
// return initialState 
// };
// };