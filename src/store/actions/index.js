export const CHANGE_SELECTED_PRODUCT = 'CHANGE_SELECTED_PRODUCT';
export const CHANGE_SELECTED_CATEGORY = 'CHANGE_SELECTED_CATEGORY';
export const CHANGE_SELECTED_SUBPRODUCT = 'CHANGE_SELECTED_SUBPRODUCT';

export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const ADD_NEW_SUBPRODUCT = 'ADD_NEW_SUBPRODUCT';

export const RESET_ALL = 'RESET_ALL';

export const reset = () => {
    return async dispatch => {
        dispatch({ type: RESET_ALL })

    }
}

export const changeSelectedProduct = (productName, isRemove) => {
    return async dispatch => {
        dispatch({ type: CHANGE_SELECTED_PRODUCT, productName, isRemove })

    }
}

export const changeSelectedCategory = (categoryName, isRemove) => {
    return async dispatch => {
        dispatch({ type: CHANGE_SELECTED_CATEGORY, categoryName, isRemove })

    }
}

export const changeSelectedSubProduct = (subProductName, isRemove) => {
    return async dispatch => {
        dispatch({ type: CHANGE_SELECTED_SUBPRODUCT, subProductName, isRemove })
    }
}

export const addNewProduct = (productName) => {
    return async dispatch => {
        dispatch({ type: ADD_NEW_PRODUCT, productName })
    }
}

export const addNewCategory = (categoryName, owner) => {
    return async dispatch => {
        dispatch({ type: ADD_NEW_CATEGORY, categoryName, owner })
    }
}

export const addNewSubProduct = (subProductName, owner) => {
    return async dispatch => {
        dispatch({ type: ADD_NEW_SUBPRODUCT, subProductName, owner })
    }
}