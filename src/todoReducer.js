
export const todoReducer = ( state = [] , action ) => {

    switch ( action.type ) {
        case 'Agregar':
            return  [ ...state, action.payload ];
        
        case 'eliminar':
            return state.filter( todo => todo.id !== action.payload );
            
        default:
            return state;
    }

}