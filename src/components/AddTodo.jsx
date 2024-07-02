import { MdOutlineAddBox } from "react-icons/md";
import {useState,useRef, useContext} from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

function AddTodo(){

  const contextObj=useContext(TodoItemsContext);
  const onNewItem=contextObj.addNewItem;


//changing state useing useRef: (MTD 2)

  const todoNameElement=useRef();
  const todoDateElement=useRef();


const handleAddButton=(event)=>{
  const todoName=todoNameElement.current.value;
  const todoDate=todoDateElement.current.value;
  onNewItem(todoName,todoDate);
  todoNameElement.current.value="";
  todoDateElement.current.value="";
  
}



  return (
    <>

    
  <div className="container text-center">
  <form action="">
  <div className="row parthRow none">
    <div className="col-6">
      <input 
      type="text" 
      placeholder="Enter Todo Here"
      id="ip"   
      // onChange={handleNameChange} 
      ref={todoNameElement}
      required />
    </div>
    <div className="col-4">
      <input 
      type="date" 
      id="dt" 
      // onChange={handleDateChange} 
      ref={todoDateElement}
      required />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success" onClick={handleAddButton}> <MdOutlineAddBox></MdOutlineAddBox> </button>
    
    
    </div>
    
  </div>
  
  </form>
  
  </div>
 
  </>
  )
}


export default AddTodo;