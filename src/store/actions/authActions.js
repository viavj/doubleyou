import * as actionTypes from '../actionTypes'
import axios from 'axios'
import endPoints from '../../shared/endPoints'
import * as regExp from '../../shared/regExp'
import authFields from '../../shared/auth/authFields'


const validatePassword = pass => {
    let isValid = false
    pass.match(regExp.STRING_FORMAT)
        && (isValid = true);

    return isValid
}

const validateEmail = email => {
    let isValid = false
    email.match(regExp.EMAIL_FORMAT)
        && (isValid = true);

    return isValid
}

export const auth = () => {
    return (dispatch, getState) => {
        const { authReducer: { email, password } } = getState();
        axios.get(endPoints.USER_AUTH(email))
            .then(res => {
                dispatch({
                    type: actionTypes.USER_AUTH,
                    user: Object.keys(res.data).length ?
                        res.data[Object.keys(res.data)[0]]
                        : null
                })
            })
            .catch(err => console.log(err))
    }
}

export const registerUser = () => {
    return (dispatch, getState) => {
        const { authReducer: { email, password, confirmPass, confirmEmail } } = getState()
        const data = {
            email: email,
            password: password
        }
        // if all inputs (2 * email, 2 * password) coincide
        email === confirmEmail
            && password === confirmPass
            && (
                axios.post(endPoints.USER_REGISTER(email, password), data)
                    .then(res => {
                        res.status === 200
                            && (
                                dispatch({
                                    type: actionTypes.USER_REGISTER,
                                })
                            )
                    })
                    .catch(err => console.log(err))
            )
    }
}

export const storeAuthField = (fieldObj) => {
    return {
        type: actionTypes.STORE_AUTH_FIELD,
        fieldObj: fieldObj
    }
}

export const confirmAuthField = (fieldObj) => {
    return {
        type: actionTypes.CONFIRM_AUTH_FIELD,
        fieldObj: fieldObj
    }
}