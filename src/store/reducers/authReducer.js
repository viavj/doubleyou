import * as actionTypes from '../actionTypes'
import authStatus from '../../shared/auth/authStatus'
import authFields from '../../shared/auth/authFields'

const initialState = {
    email: '',
    password: '',
    confirmEmail: '',
    confirmPass: '',
    authStatus: authStatus.UNKNOWN,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.USER_AUTH:
            const status = action.user ?
                (action.user[authFields.PASSWORD] === state[authFields.PASSWORD]) ?
                    authStatus.LOGED_IN
                    : authStatus.WRONG_PASS
                : authStatus.CONFIRM_NEW_USER
            return {
                ...state,
                authStatus: status
            }

        case actionTypes.USER_REGISTER:
            return {
                ...state,
                authStatus: authStatus.REGISTERED
            }

        case actionTypes.STORE_AUTH_FIELD:
            const field = Object.keys(action.fieldObj)[0]
            return {
                ...state,
                [field]: action.fieldObj[field]
            }

        case actionTypes.CONFIRM_AUTH_FIELD:
            const confirmField = Object.keys(action.fieldObj)[0]
            return {
                ...state,
                [confirmField]: action.fieldObj[confirmField]
            }

        default: return state;
    }
}

export default reducer;