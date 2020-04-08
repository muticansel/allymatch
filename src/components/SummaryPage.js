import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

const Summary = props => {
    const selectedProducts = useSelector(state => state.mainReducer.products).filter(prod => prod.checked).map(prod => prod.value).join(", ");
    const selectedCategories = useSelector(state => state.mainReducer.categories).filter(cat => cat.checked).map(cat => cat.value).join(", ");
    const selectedSubProducts = useSelector(state => state.mainReducer.subProducts).filter(subProd => subProd.checked).map(subProd => subProd.value).join(", ");

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Products</Text>
            <Text>{selectedProducts}</Text>
            <Text>Categories</Text>
            <Text>{selectedCategories}</Text>
            <Text>Sub Products</Text>
            <Text>{selectedSubProducts}</Text>
        </View>
    )
}

export default Summary