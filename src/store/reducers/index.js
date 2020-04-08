import { CHANGE_SELECTED_PRODUCT, CHANGE_SELECTED_CATEGORY, CHANGE_SELECTED_SUBPRODUCT } from '../actions';

import dummyData from '../../../dummyData';

const initialState = {
    products: dummyData.products,
    categories: dummyData.categories,
    subProducts: dummyData.subProducts
}

const reducer = (state = initialState, action) => {
    let updatedCategories = [...state.categories];
    let updatedSubProducts = [...state.subProducts];

    switch (action.type) {
        case CHANGE_SELECTED_PRODUCT:
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
        case CHANGE_SELECTED_CATEGORY:
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
        case CHANGE_SELECTED_SUBPRODUCT:
            updatedSubProducts.find(y => y.value === action.subProductName).checked = !action.isRemove;

            return {
                ...state,
                subProducts: updatedSubProducts
                // selectedSubProducts: action.isRemove ?
                //     state.selectedSubProducts.filter(subProd => subProd !== action.subProductName) :
                //     state.selectedSubProducts.concat(action.subProductName)
            }
        default:
            return state;
    }
}

export default reducer;