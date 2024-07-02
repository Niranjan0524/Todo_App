import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsStore";


function TodoItem({todoName,todoDate}){

    const contextObj=useContext(TodoItemsContext);
    const handleDeleteItem=contextObj.handleDeleteItem;
  
  
    return  <div className="container ">
    
  
      <div className="row parthRow">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
       {todoDate}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-danger" onClick={()=> handleDeleteItem(todoName)}><MdDelete /></button>
      </div>
  
      
    
    </div>
    </div>
  }
  export default TodoItem;
  