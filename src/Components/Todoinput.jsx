import React, { useState } from 'react'

const Todoinput = (props) => {
  const{handleAddTodos,todoValue,setTodoValue}=props
 
  return (
    <div>
     <input value={todoValue} onChange={(e)=>{
 setTodoValue(e.target.value)
     }} placeholder='Enter todo..' />
     
     <button onClick={()=>{
      handleAddTodos(todoValue)
      setTodoValue('')
     }}>Add</button>
    </div>
  )
}

export default Todoinput
