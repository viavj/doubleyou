import * as actionTypes from '../actionTypes';
import * as layoutTypes from '../../shared/layoutTypes';

export const getLayoutType = () => {
    return {
        type: actionTypes.GET_LAYOUT_TYPE,
        layoutType: window.innerHeight > window.innerWidth ? layoutTypes.MOBILE : layoutTypes.DESKTOP
    }
}

export const storeIsValidFieldUI = fieldObj => {
    return {
        type: actionTypes.IS_VALID_FIELD_UI,
        fieldObj: fieldObj
    }
}