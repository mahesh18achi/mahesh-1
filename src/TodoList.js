import React from "react";

const TodoList=({todos,deleteHandler})=>{
    return(
      <div>
        {todos.map((todo,index)=>
            <div key={index}>
                <h5> {index+1} {todo} &nbsp; <button onClick={()=>deleteHandler(index)}>DELETE</button></h5>
            </div>)}
      </div>

    )
}

export default TodoList