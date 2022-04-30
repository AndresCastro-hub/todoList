import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done : false
}];

export const TodoApp = () => {

    const [todos ,dispatch ] = useReducer(todoReducer, initialState)

  

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done : false
        }

        const action = {
            type: 'Agregar',
            payload: newTodo
        }

        dispatch( action )
    }
    
     console.log(todos)
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
                                            <button className="btn btn-danger">Borrar</button>
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
                            name='description'
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'
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
