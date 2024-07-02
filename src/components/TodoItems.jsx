import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import TodoItem from "./TodoItem";

//method to take array from other file to this file :

const TodoItems =()=>{

    const contextObj =useContext(TodoItemsContext)
    const todoItems=contextObj.todoItems;
    

    return (
        <>
    
    <div className="itemsContainer">
        {todoItems.map(item => <TodoItem 
        todoDate={item.dueDate}
        todoName={item.name} 
        key={item.name}></TodoItem>
       )}     
         
    </div> 
        </>
    )

}

export default TodoItems;
