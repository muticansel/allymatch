import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListItem, Body, Text, CheckBox, Item, Input } from 'native-base';

import * as actions from '../store/actions';

const SubProducts = props => {
    const dispatch = useDispatch();
    const subProducts = useSelector(state => state.mainReducer.subProducts).filter(subProd => subProd.ownerCategory === props.category.id);
    const [search, setSearch] = useState('');

    const searchHandler = (val) => {
        setSearch(val)
    }

    const productCheckedHandler = (subProduct) => {
        let updatedSubProduct = subProducts.find(subProd => subProd.value === subProduct.value);
        updatedSubProduct.checked = !updatedSubProduct.checked;

        dispatch(actions.changeSelectedSubProduct(subProduct.value, updatedSubProduct.checked ? false : true))
    }

    return (
        <Card style={{ marginLeft: 10, marginRight: 10 }}>
            <View key="searchBox" style={{ marginnLeft: 0, backgroundColor: props.color }}>
                <ListItem>
                    <Item rounded style={{ backgroundColor: 'white' }}>
                        <Input placeholder='Search' onChangeText={(val) => searchHandler(val)} />
                    </Item>
                </ListItem>
            </View>
            {subProducts.length > 0 &&
                <View style={{ backgroundColor: '#B3BEBF' }}>
                    {subProducts.map((subProd, i) => {
                        return (
                            <View key={i}>
                                <ListItem>
                                    <Body>
                                        <Text>{subProd.value}</Text>
                                    </Body>
                                    <CheckBox onPress={() => productCheckedHandler(subProd)} checked={subProd.checked} color={subProd.cardColor} />
                                </ListItem>
                            </View>
                        )
                    })}
                </View>
            }
        </Card>
    )
}

export default SubProducts