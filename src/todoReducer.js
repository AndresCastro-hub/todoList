
export const todoReducer = ( state = [] , action ) => {

    switch ( action.type ) {
        case 'Agregar':
            return  [ ...state, action.payload ];
    
        default:
            return state;
    }

}