import counterReducer from './counter';
import studentReducer from './student';
import { combineReducers } from 'redux';

const reducers = combineReducers( {
    counter: counterReducer,
    student: studentReducer
} );

export default reducers;
