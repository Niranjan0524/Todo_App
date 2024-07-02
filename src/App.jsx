import Appname from "./components/Appname";
// import NewTable from "./components/NewTable";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import TodoItem from "./components/TodoItem";
import './App.css';
import { useState , useReducer } from "react";
import Container from "./components/Container";
import WelcomeMessage from "./components/WelcomeMessage";
// import TodoItemsContextProvider, { TodoItemsContext } from "./store/todoItemsStore";

import TodoItemsContextProvider from "./store/todoItemsStore";



function App(){         
      
  return (

    <TodoItemsContextProvider>
    
    <center className='todo-container'>
    <Appname></Appname>

    <br /><br />

    <Container>
    <AddTodo ></AddTodo>
    <WelcomeMessage  ></WelcomeMessage>
    <TodoItems ></TodoItems>    
    </Container>
    
  </center>
  </TodoItemsContextProvider>


  //with help of this context provider we can skip passing the props individually and can directly access wherever we need of it...
  ); 


}


export default App;


