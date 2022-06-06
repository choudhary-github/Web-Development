import React from "react";

export default function Todo({todo,dispatch}){
  return(
    <div>
      <span style={{color: todo.complete ? '#AAA' : '#000'}}>
        {todo.name}</span>
        <button style={{margin: '5px'}}>Toggle</button>
        <button>Delete</button>
    </div>
  )
}