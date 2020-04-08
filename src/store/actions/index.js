export const CHANGE_SELECTED_PRODUCT = 'CHANGE_SELECTED_PRODUCT';
export const CHANGE_SELECTED_CATEGORY = 'CHANGE_SELECTED_CATEGORY';
export const CHANGE_SELECTED_SUBPRODUCT = 'CHANGE_SELECTED_SUBPRODUCT';

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