import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, CheckBox, Body, ListItem, Content } from 'native-base';

import DroddownComp from './DropDownButton';
import * as actions from '../store/actions';

const Products = props => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.mainReducer.products);

    const productCheckedHandler = (product) => {
        let updatedProds = [...products];
        let updatedProd = updatedProds.find(prod => prod.value === product.value);
        updatedProd.checked = !updatedProd.checked;

        dispatch(actions.changeSelectedProduct(product.value, updatedProd.checked ? false : true))
    }

    return (
        <Content>
            {products.map((product, i) => {
                return (
                    <View key={i}>
                        <ListItem>
                            <Body>
                                <Text>{product.value}</Text>
                            </Body>
                            <CheckBox onPress={() => productCheckedHandler(product)} checked={product.checked} />
                        </ListItem>
                        {product.checked &&
                            <View>
                                <DroddownComp text="Select Sub Category" product={product} bgColor="#2B0775" cardColor={"#E2D9F4"} />
                            </View>
                        }
                    </View>
                )
            })}
        </Content>
    )
}

export default Products