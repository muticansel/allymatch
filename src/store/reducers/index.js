import * as mainActions from '../actions';

import dummyData from '../../../dummyData';

const initialState = {
    products: dummyData.products,
    categories: dummyData.categories,
    subProducts: dummyData.subProducts
}

const reducer = (state = initialState, action) => {
    const updatedProducts = [...state.products];
    let updatedCategories = [...state.categories];
    let updatedSubProducts = [...state.subProducts];

    switch (action.type) {
        case mainActions.CHANGE_SELECTED_PRODUCT:
            let products = [...state.products];
            products.find(prod => prod.value === action.productName).checked = !action.isRemove;
            if (action.isRemove) {
                updatedCategories
                    .filter(cat => cat.ownerProduct === action.productName.replace(" ", "").toLowerCase())
                    .forEach(cat => {
                        cat.checked = false;
                        updatedSubProducts
                            .filter(subPord => subPord.ownerCategory === cat.id)
                            .forEach(prod => prod.checked = false)
                    })
            }

            return {
                ...state,
                products: products,
                categories: updatedCategories,
                subProducts: updatedSubProducts
            }
        case mainActions.CHANGE_SELECTED_CATEGORY:
            updatedCategories.find(cat => cat.value === action.categoryName).checked = !action.isRemove;
            if (action.isRemove) {
                updatedSubProducts
                    .filter(subProd => subProd.ownerCategory === action.categoryName.replace(" ", "").toLowerCase())
                    .forEach(subProd => subProd.checked = false)
            }

            return {
                ...state,
                categories: updatedCategories,
                subProducts: updatedSubProducts
            }
        case mainActions.CHANGE_SELECTED_SUBPRODUCT:
            updatedSubProducts.find(y => y.value === action.subProductName).checked = !action.isRemove;

            return {
                ...state,
                subProducts: updatedSubProducts
            }
        case mainActions.ADD_NEW_PRODUCT:
            const newProduct = {
                id: action.productName.replace(" ", "").toLowerCase(),
                value: action.productName,
                checked: false
            }
            return {
                ...state,
                products: state.products.concat(newProduct)
            }
        case mainActions.ADD_NEW_CATEGORY:
            const newCategory = {
                id: action.categoryName.replace(" ", "").toLowerCase(),
                value: action.categoryName,
                checked: false,
                ownerProduct: action.owner
            }
            return {
                ...state,
                categories: state.categories.concat(newCategory)
            }
        case mainActions.ADD_NEW_SUBPRODUCT:
            const newSubProduct = {
                id: action.subProductName.replace(" ", "").toLowerCase(),
                value: action.subProductName,
                checked: false,
                ownerCategory: action.owner
            }
            return {
                ...state,
                subProducts: state.subProducts.concat(newSubProduct)
            }
        case mainActions.RESET_ALL:
            updatedProducts.forEach(prod => prod.checked = false);
            updatedCategories.forEach(cat => cat.checked = false);
            updatedSubProducts.forEach(subProd => subProd.checked = false);
            return {
                ...state,
                products: updatedProducts,
                categories: updatedCategories,
                subProductName: updatedSubProducts
            }
        default:
            return state;
    }
}

export default reducer;