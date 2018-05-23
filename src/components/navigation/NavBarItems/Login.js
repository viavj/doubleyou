import React from 'react'
import authFields from '../../../shared/auth/authFields'
import authMessages from '../../../shared/auth/authMessages'
import authStatus from '../../../shared/auth/authStatus'

const login = props => {
    console.log(props.authStatus)
    console.log(props.authStatus)
    console.log(props.authStatus)
    console.log(props.authStatus)
    console.log(props.authStatus)

    // check the Auth status, if loged in or wrong password, etc...
    const message = props.authStatus === authStatus.UNKNOWN ?
        authMessages.IDENTIFY
        : props.authStatus === authStatus.LOGED_IN ?
            authMessages.WELCOME
            : props.authStatus === authStatus.WRONG_PASS ?
                authMessages.WRONG_PASS
                : props.authStatus === authStatus.CONFIRM_NEW_USER ?
                    authMessages.CONFIRMATION
                    : props.authStatus === authStatus.REGISTERED ?
                        authMessages.REGISTERED
                        : null

    return (
        <div className='section-login'>
            <p>{message}</p>
            <div>
                <div className={` ${props.authStatus === authStatus.UNKNOWN
                    || props.authStatus === authStatus.WRONG_PASS ?
                    'fields-container' : 'display-none'}`} >

                    <input placeholder='Email'
                        className={!props.validation.email ? 'invalid-field' : ''}
                        onChange={(e) => props.storeAuthField({
                            [authFields.EMAIL]: e.target.value
                        })} />
                    <input placeholder='Password' type="password"
                        className={!props.validation.password ? 'invalid-field' : ''}
                        onChange={(e) => props.storeAuthField({
                            [authFields.PASSWORD]: e.target.value
                        })} />
                    <button onClick={props.auth} >OK</button>

                </div>

                <div className={` ${props.authStatus === authStatus.CONFIRM_NEW_USER
                    ?
                    'fields-container' : 'display-none'}`}>

                    <input placeholder='Email confirm'
                        className={!props.validation.confirmEmail ? 'invalid-field' : ''}
                        onChange={(e) => props.confirmAuthFiled({
                            [authFields.CONFIRM_EMAIL]: e.target.value
                        })} />
                    <input placeholder='Password' type="password"
                        className={!props.validation.confirmPass ? 'invalid-field' : ''}
                        onChange={(e) => props.confirmAuthFiled({
                            [authFields.CONFIRM_PASS]: e.target.value
                        })} />
                    <button onClick={props.register} >OK</button>
                </div>

            </div>
        </div>
    )
}

export default login