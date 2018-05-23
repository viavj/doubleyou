import * as actionTypes from '../actionTypes'

const initialState = {
    sampleDishes: [],
    fulDishList: [],
    dish: {},
    toggleFulList: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_FUL_DISH_LIST:
            return {
                ...state,
                fulDishList: action.dishes
            }

        case actionTypes.GET_SAMPLE_DISHES:
            return {
                ...state,
                sampleDishes: action.dishes
            }

        case actionTypes.GET_DISH:
            return {
                ...state,
                dish: action.dish
            }

        case actionTypes.TOGGLE_FUL_LIST:
            return {
                ...state,
                toggleFulList: !state.toggleFulList
            }

        default: return state;
    }
}

export default reducer;