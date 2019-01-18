/*
// ##1
import * as types from '../actions/ActionTypes';

const initialState = {
    number : 0,
    color: 'black'
} 

function counter(state = initialState, action){
    switch(action.type){
        case types.INCREMENT : 
            return {
                ...state,
                number: state.number + 1
            }
        case types.DECREMENT : 
            return {
                ...state,
                number: state.number - 1
            }
        case types.SET_COLOR : 
            return {
                ...state,
                color: action.color
            }
        default :
            return state;
    }
}
export default counter; 
*/

/*
// ##2
import { combineReducers } from 'redux'; 
import number from './number'; 
import color from './color'; 

const reducers = combineReducers({
    numberData : number,
    colorData : color
})

export default reducers;
*/

// ##3
import * as types from '../actions/ActionTypes' 

const initialState = {
    counters : [
        {
            number : 0,
            color: 'black'
        }
    ]
}

function counter(state = initialState, action){
    const { counters } = state;
    switch(action.type){
        case types.INCREMENT : 
            return {
                counters:[
                    ...counters.slice(0,action.index),
                    {
                        ...counters[action.index],
                        number : counters[action.index].number + 1
                    },
                    ...counters.slice(action.index+1,counters.length)
                ]
            } 
        case types.DECREMENT : 
            return {
                counters:[
                    ...counters.slice(0,action.index),
                    {
                        ...counters[action.index],
                        number : counters[action.index].number -1
                    },
                    ...counters.slice(action.index+1,counters.length)
                ]   
            } 
        case types.SET_COLOR : 
            return {
                counters:[
                    ...counters.slice(0,action.index),
                    {
                        ...counters[action.index],
                        color : action.color
                    },
                    ...counters.slice(action.index+1,counters.length)
                ]
            }
        case types.CREATE: 
            return {
                ...state,
                color: action.color
            }
        case types.REMOVE: 
            return {
                counters:counters.slice(0,counters.length-1)
            }
        default :
            return state;
    }
}
export default counter;