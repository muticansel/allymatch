import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListItem, Body, Text, CheckBox, Item, Input, Button, Icon } from 'native-base';

import * as actions from '../store/actions';
import NewSubProduct from './UI/AddNew';

const SubProducts = props => {
    const dispatch = useDispatch();
    const subProducts = useSelector(state => state.mainReducer.subProducts).filter(subProd => subProd.ownerCategory === props.category.id);
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const searchHandler = (val) => {
        setSearch(val)
    }

    const productCheckedHandler = (subProduct) => {
        let updatedSubProduct = subProducts.find(subProd => subProd.value === subProduct.value);
        updatedSubProduct.checked = !updatedSubProduct.checked;

        dispatch(actions.changeSelectedSubProduct(subProduct.value, updatedSubProduct.checked ? false : true))
    }

    const addSubProductHandler = (val, subProductName, owner) => {
        setModalVisible(val)
        if (!val && subProductName)
            dispatch(actions.addNewSubProduct(subProductName, owner))
    }

    return (
        <Card style={{ marginLeft: 10, marginRight: 10 }}>
            <NewSubProduct isVisible={modalVisible} addHandler={addSubProductHandler} placeholder="Sub Product Name" owner={props.category.id} />
            <View key="searchBox" style={styles.search, { backgroundColor: props.color }}>
                <ListItem>
                    <Item rounded style={{ backgroundColor: 'white' }}>
                        <Input placeholder='Search' onChangeText={(val) => searchHandler(val)} />
                    </Item>
                </ListItem>
            </View>
            {subProducts.length > 0 &&
                <View style={{ backgroundColor: '#B3BEBF' }}>
                    {subProducts.filter(subProd => search ? subProd.value.includes(search) : subProd.value).map((subProd, i) => {
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
            <Button dark style={{ justifyContent: 'center' }} onPress={() => addSubProductHandler(true)}>
                <Text>Add Sub Product</Text>
                <Icon type="FontAwesome" name='plus' />
            </Button>
        </Card>
    )
}

const styles = StyleSheet.create({
    search: {
        marginLeft: 0
    }
})

export default SubProducts