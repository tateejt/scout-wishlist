import {FETCH_PLAYERS, NEW_PLAYER,  REMOVE_PLAYER} from '../actions/types';

const initialState = {
    athletes: [],
    athlete: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
       case FETCH_PLAYERS:
           return {
               ...state,
               athletes: action.payload
           }

        case NEW_PLAYER:
           return {
               ...state,
               athlete: action.payload
           }

        case REMOVE_PLAYER:
           return {
               ...state,
               athletes: state.athletes.filter(athlete => athlete.id !== action.payload)
           }

        default:
            return state;
    }
}
