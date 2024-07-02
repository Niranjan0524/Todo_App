
import {  createContext } from "react";
import { useReducer } from "react";


export const TodoItemsContext=createContext();



//pure functuion :which does not depend on outer components:
//this reducer decides the new value on the basis of initialitems and of action provided to it...
//use state is not used because of this and lot of code is reduced..
const todoitemsReducer = (initialTodoItems,action) =>{

  let todoItems=initialTodoItems;
  //first we will check type of action:
  if(action.type==='NEW_ITEM'){
    let name=action.payload.itemName;
    let dueDate=action.payload.itemDueDate;
    todoItems=[...initialTodoItems,{name,dueDate}];
  }

  if(action.type==='DELETE_ITEM'){
    todoItems=initialTodoItems.filter(item  => item.name !== action.payload.itemName);

  }

  return todoItems;

 }


const TodoItemsContextProvider = ({ children })=>
    {
        
//new hook: useReduser()--> returns 2 things :state and dispatch
//u need to pass 2 things that are reducer method (takes action object and returns state) and initialState...

  const [ todoItems,dispatchTodoItems ]=useReducer(todoitemsReducer, 
    [{
    name:"physics-homework",
    dueDate:"4/3/2014",
  },
  {
    name:"mathematics-homework",
    dueDate:"5/3/2014"
  },
  {
    name:"buy-milk",
    dueDate:"6/3/2014"

  },
  {
    name:"call-x",
    dueDate:"7/3/2014"
  }
]);
   
    
    const onNewItem=(itemName,itemDueDate)=>{
      const newItemAction={

        type:"NEW_ITEM",
        payload:{
          itemName,
          itemDueDate
        }

      };

      dispatchTodoItems(newItemAction);
      // after dispatch is called it will go to the pure function which is out of the main function(Reducer).
      //which handles the new and old items and decides what will be the resulting values.

    }

    
    const handleDeleteItem=(todoItemName)=>{
       
      const deleteItemAction={

        type:"DELETE_ITEM",
        payload:{
          itemName:todoItemName,
          itemDueDate:''
        }

      };

      dispatchTodoItems(deleteItemAction)

      
    }


    return (
    <TodoItemsContext.Provider value={{
        todoItems:todoItems,
        addNewItem:onNewItem,
        handleDeleteItem:handleDeleteItem
      }}>
         {children}         

     </TodoItemsContext.Provider>
);
}


    export default TodoItemsContextProvider;






