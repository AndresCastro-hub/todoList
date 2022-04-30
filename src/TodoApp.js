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
        console.log(todoId)

        //crear la accion
        const action = {
            type: 'eliminar',
            payload : todoId
        }
        //dispatch
        dispatch( action )
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
            <h1>TodoApp ({todos.length}) </h1>

            <div className='row'>

                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map ( (todo, i) => {
                                return <li
                                            key={todo.id}
                                            className = 'list-group-item'
                                        >
                                            <p className='text-center'>{i + 1 }. {todo.desc}</p> 
                                            <button className="btn btn-danger" onClick={ () => handleDelete( todo.id )}>Borrar</button>
                                        </li>
                            })
                        }
                    </ul>
                </div>

                <div className='col-5'>

                    <h4>Agregar un todo</h4>

                    <form onSubmit={handleSubmit}>

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
