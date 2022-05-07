import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos , handleDelete , handleToogle}) => {
    return (
        <div >
            <ul className='list-group list-group-flush'>
                {
                    todos.map ( (todo, i) => (
                          <TodoListItem 
                            key = {todo.id}
                            todo = {todo}
                            index = {i}  
                            handleDelete = {handleDelete}
                            handleToogle = {handleToogle}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
