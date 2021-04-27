const initialState = {
    name: '',
    age: 0,
}

const studentReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'SET_NAME' :
            return {
                ...state,
                name: action.name
            };
        case 'SET_AGE' :
            return {
                ...state,
                age: action.age
            };
        default :
            return state;
    }
}

export default studentReducer;
