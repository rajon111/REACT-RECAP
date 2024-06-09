import React from 'react'
import Card from './Card'


export default function TodoList({todos}) {
    
    
  return (
    <ul className='main'>
        {todos.map ((todo, todoIndex) =>{
            return(
                <Card key={todoIndex}>
                    <p>{todo}</p>
                </Card>
            )
        })}
    </ul>
  )
}
