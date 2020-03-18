import {combineReducers} from 'redux';
import playerReducer from './playerReducer';
import noteReducer from './noteReducer';

const rootReducer =  combineReducers({
    players: playerReducer,
    notes: noteReducer
});

export default rootReducer;
