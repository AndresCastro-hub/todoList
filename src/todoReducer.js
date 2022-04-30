
export const todoReducer = ( state = [] , action ) => {

    switch ( action.type ) {
        case 'Agregar':
            return  [ ...state, action.payload ];
        
        case 'eliminar':
            return state.filter( todo => todo.id !== action.payload );
        
        case 'tachar':
            return state.map( todo => {
                
                if( todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }    
                }
                else{
                    return todo;
                }
            })

        default:
            return state;
    }

}