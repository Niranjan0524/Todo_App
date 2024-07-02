import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const WelcomeMessage=()=>{


    const contextObj=useContext(TodoItemsContext);
    const todoItems=contextObj.todoItems;

    return (
        todoItems.length === 0 && <h1 id="welcomeMessage">Enjoy your Day</h1> 
    )
}

export default WelcomeMessage;