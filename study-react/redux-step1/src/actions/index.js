import * as types from './ActionTypes';

export const increment = (index) => {
    return {
        type: types.INCREMENT, index
    }
}

export const decrement = (index) => {
    return {
        type: types.DECREMENT, index
    }
}

export const setColor = (index, color) => {
    return {
        type: types.SET_COLOR, index, color
    }
} 

export const create = (color) => {
    return {
        type: types.CREATE, color
    }
} 

export const remove = () => {
    return {
        type: types.REMOVE
    }
} 