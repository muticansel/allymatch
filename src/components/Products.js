import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, CheckBox, Body, ListItem, Content, Button, Icon } from 'native-base';

import SubCategories from './Categories';
import DroddownComp from './UI/DropDownButton';
import NewProduct from './UI/AddNew';
import * as actions from '../store/actions';

const Products = props => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.mainReducer.products);
    const [modalVisible, setModalVisible] = useState(false)

    const productCheckedHandler = (product) => {
        let updatedProds = [...products];
        let updatedProd = updatedProds.find(prod => prod.value === product.value);
        updatedProd.checked = !updatedProd.checked;

        dispatch(actions.changeSelectedProduct(product.value, updatedProd.checked ? false : true))
    }

    const addProductHandler = (val, productName) => {
        setModalVisible(val)
        if (!val && productName)
            dispatch(actions.addNewProduct(productName))
    }

    return (
        <Content>
            <NewProduct isVisible={modalVisible} addHandler={addProductHandler} placeholder="Product Name" />
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
                                <DroddownComp text="Select Sub Category" bgColor="#2B0775" cardColor={"#E2D9F4"}>
                                    <SubCategories product={product} color={"#E2D9F4"} />
                                </DroddownComp>
                            </View>
                        }
                    </View>
                )
            })}
            <Button style={{ justifyContent: 'center' }} onPress={() => addProductHandler(true)}>
                <Text>Add Product</Text>
                <Icon type="FontAwesome" name='plus' />
            </Button>
        </Content>
    )
}

export default Products