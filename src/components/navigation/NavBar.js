import React from 'react'
import Dishes from './NavBarItems/Dishes'
import Login from './NavBarItems/Login'
import './NavBar.css'

const navBar = props => {
    return (
        <div className='navBar'>
            <div className='section right-separator'>
                <p>Section 1</p>
            </div>
                <Dishes 
                    getDish={props.getDish}
                    getFulDishList={props.getFulDishList}
                    getSampleDishes={props.getSampleDishes}
                    toggleFulListFunction={props.toggleFulListFunction}
                    {...props.dishesReducer}
                />
            <div className='section'>
                <p>Section 3</p>
            </div>

            <Login
                storeAuthField={props.storeAuthField}
                confirmAuthFiled={props.confirmAuthFiled}
                auth={props.handleAuth}
                register={props.handleRegister}
                validation={props.uiReducer}
                {...props.authReducer}
            />

            <div className='section'>
                <p>Section 4</p>
            </div>
        </div>
    )
}

export default navBar