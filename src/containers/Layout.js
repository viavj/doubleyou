import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionCreators from '../store/actionCreators';
import * as regExp from '../shared/regExp';
import * as layoutTypes from '../shared/layoutTypes';
import authFields from '../shared/auth/authFields'
import './Layout.css';

import NavBar from '../components/navigation/NavBar'
import DishView from '../components/dishView/dishView'


export class Layout extends React.Component {

    componentWillMount() {
        window.addEventListener('resize', this.props.getLayoutType)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.getLayoutType)
    }

    componentDidMount() {
        this.props.getLayoutType();
        this.props.getSampleDishes()
    }

    handleAuth = () => {
        let isEmailValid = this.props.authReducer.email.match(regExp.EMAIL_FORMAT) ? true : false
        let isPassValid = this.props.authReducer.password.match(regExp.STRING_FORMAT) ? true : false

        this.props.storeIsValidFieldUI({
            [authFields.EMAIL]: isEmailValid
        })

        this.props.storeIsValidFieldUI({
            [authFields.PASSWORD]: isPassValid
        });

        (isPassValid && isEmailValid)
            && (this.props.auth())
    }

    handleRegister = () => {
        let isEmailValid = this.props.authReducer.email === this.props.authReducer.confirmEmail ?
            true : false
        let isPassValid = this.props.authReducer.password === this.props.authReducer.confirmPass ?
            true : false

        this.props.storeIsValidFieldUI({
            [authFields.CONFIRM_EMAIL]: isEmailValid
        })

        this.props.storeIsValidFieldUI({
            [authFields.CONFIRM_PASS]: isPassValid
        });

        (isPassValid && isEmailValid)
            && (this.props.register())
    }

    render() {
        const isMobile = this.props.uiReducer.layoutType === layoutTypes.MOBILE ? 'mobile' : ''
        return (
            <div className={`wrapper ${isMobile}`}>
                <NavBar
                    {...this.props}
                    handleAuth={this.handleAuth}
                    handleRegister={this.handleRegister}
                />
                <DishView dish={this.props.dishesReducer.dish} />
            </div>
        )
    }

}

Layout.propTypes = {
    authStatus: PropTypes.string.isRequired,
    sampleDishes: PropTypes.array,
    fulDishList: PropTypes.array,
    dish: PropTypes.object,
    toggleFulList: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        uiReducer: state.uiReducer,
        authReducer: state.authReducer,
        authStatus: state.authReducer.authStatus,
        dishesReducer: state.dishesReducer,
        dish: state.dishesReducer.dish,
        sampleDishes: state.dishesReducer.sampleDishes,
        fulDishList: state.dishesReducer.fulDishList,
        toggleFulList: state.dishesReducer.toggleFulList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLayoutType: () => dispatch(actionCreators.getLayoutType()),
        auth: () => dispatch(actionCreators.auth()),
        register: () => dispatch(actionCreators.registerUser()),
        storeAuthField: (fieldObj) => dispatch(actionCreators.storeAuthField(fieldObj)),
        confirmAuthFiled: (fieldObj) => dispatch(actionCreators.confirmAuthField(fieldObj)),
        getDish: (id) => dispatch(actionCreators.getDish(id)),
        getFulDishList: () => dispatch(actionCreators.getFulDishList()),
        getSampleDishes: () => dispatch(actionCreators.getSampleDishes()),
        toggleFulListFunction: () => dispatch(actionCreators.toggleFulList()),
        storeIsValidFieldUI: (fieldObj) => dispatch(actionCreators.storeIsValidFieldUI(fieldObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)