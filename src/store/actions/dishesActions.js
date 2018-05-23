import * as actionTypes from '../actionTypes'
import axios from 'axios'
import endPoints from '../../shared/endPoints'

const convertToArray = obj => {
    return Object.keys(obj).map(key => {
        return {
            ...obj[key],
            id: key
        }
    })
}

export const getFulDishList = () => {
    return (dispatch) => {
        axios.get(endPoints.GET_FUL_DISH_LIST)
        .then(res => {
            dispatch({
                type: actionTypes.GET_FUL_DISH_LIST,
                dishes: convertToArray(res.data)
            })
        })
    }
}

export const getSampleDishes = () => {
    return (dispatch) => {
        axios.get(endPoints.GET_SAMPLE_DISHES)
        .then(res => {
            dispatch({
                type: actionTypes.GET_SAMPLE_DISHES,
                dishes: convertToArray(res.data)
            })
        })
    }
}

export const getDish = (id) => {
    return (dispatch, getState) => {
        const {dishesReducer:{sampleDishes, fulDishList}} = getState()
        const dishes = fulDishList.length ? fulDishList : sampleDishes
        const dish = dishes.find(dish => dish.id === id)

        dispatch({
            type: actionTypes.GET_DISH,
            dish: dish
        })
    }
}

export const toggleFulList = () => {
    return {
        type: actionTypes.TOGGLE_FUL_LIST,
    }
}