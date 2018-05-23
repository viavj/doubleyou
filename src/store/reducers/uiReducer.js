import * as actionTypes from '../actionTypes';

const initialState = {
    layoutType: '',
    email: true,
    password: true,
    confirmEmail: true,
    confirmPass: true

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LAYOUT_TYPE:
            return {
                ...state,
                layoutType: action.layoutType
            }

        case actionTypes.IS_VALID_FIELD_UI:
            const field = Object.keys(action.fieldObj)[0]
            return {
                ...state,
                [field]: action.fieldObj[field]
            }

        default: return state;
    }
}

export default reducer;