import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from './hooks/useForm';
import './styles.css'


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos ,dispatch ] = useReducer(todoReducer, [] , init);

    const [{descripcion}, handleInputChange, resetear] = useForm(  {
        descripcion : ''
    })

    useEffect ( () => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos] ) 


    const handleDelete = ( todoId ) => {
    
        const action = {
            type: 'eliminar',
            payload : todoId
        }
        
        dispatch( action )
    }

    const handleToogle = (todoId) => {
        dispatch({
            type: 'tachar',
            payload:todoId
        })
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (descripcion.length <= 1  ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done : false
        }

        const action = {
            type: 'Agregar',
            payload: newTodo
        }

        dispatch( action )
        resetear();
    }
    

    return (
        <>
            <h1 className='text-center white'>TodoApp  </h1>

            { todos.length === 0 && <p className='text-center white h5'>Bienvenido a TodoApp para comenzar ingrese un nuevo todo..</p> }
            

            <div className='container'>

                <div >
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map ( (todo, i) => {
                                return <li
                                            key={todo.id}
                                            className = 'list-group-item mt-2 rounded'
                                        >
                                            <p className= { `${todo.done && 'complete'} `  } onClick={() => handleToogle(todo.id)}>{i + 1 }. {todo.desc}</p> 
                                            <button className="btn btn-danger" onClick={ () => handleDelete( todo.id )}>Borrar</button>
                                        </li>
                            })
                        }
                    </ul>
                </div>

                <div >

                    <h2 className='mt-4 text-center white'>Agregar un todo</h2>

                    <form className='mt-3' onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name='descripcion'
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value = {descripcion}
                        />

                        <button 
                            type='submit' 
                            className='btn btn-primary mt-2 btn-block'
                        >
                            Agregar
                        </button>

                    </form>

                </div>

            </div>

        

        </>
    )
}
