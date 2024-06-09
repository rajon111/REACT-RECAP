import React, { useState } from 'react'

export default function TodoInput({hadndleAddTodos}) {
    const [todoValue, setTodoValue] = useState('')
  return (
    <header>
        <input value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} placeholder='Enter Todo........' />
        <button onClick={()=>{
            hadndleAddTodos()
        }}>Add</button>
    </header>
  )
}
