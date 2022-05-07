import React from 'react'

export const TodoListItem = ( {todo , index , handleDelete, handleToogle}) => {
    return (
        <li
            key={todo.id}
            className = 'list-group-item mt-2 rounded'
        >
            <p className= { `${todo.done && 'complete'} `  } onClick={() => handleToogle(todo.id)}>{index + 1 }. {todo.desc}</p> 
            <button className="btn btn-danger" onClick={ () => handleDelete( todo.id )}>Borrar</button>
        </li>
    )
}
