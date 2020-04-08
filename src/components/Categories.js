import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListItem, Body, Text, CheckBox, Item, Input, Button, Icon } from 'native-base';

import SubProducts from './SubProducts';
import DroddownComp from './UI/DropDownButton';
import NewCategory from './UI/AddNew';
import * as actions from '../store/actions';

const SubCategories = props => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.mainReducer.categories).filter(cat => cat.ownerProduct === props.product.id);

    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const searchHandler = (val) => {
        setSearch(val)
    }

    const categoryCheckedHandler = (category) => {
        let updatedCat = categories.find(cat => cat.value === category.value);
        updatedCat.checked = !updatedCat.checked;

        dispatch(actions.changeSelectedCategory(category.value, updatedCat.checked ? false : true))
    }

    const addCategoryHandler = (val, categoryName, owner) => {
        setModalVisible(val)
        if (!val && categoryName)
            dispatch(actions.addNewCategory(categoryName, owner))
    }

    return (
        <Card style={{ marginLeft: 10, marginRight: 10 }}>
            <NewCategory isVisible={modalVisible} addHandler={addCategoryHandler} placeholder="Category Name" owner={props.product.id} />
            <View key="searchBox" style={{ marginnLeft: 0, backgroundColor: props.color }}>
                <ListItem>
                    <Item rounded style={{ backgroundColor: 'white' }}>
                        <Input placeholder='Search' onChangeText={(val) => searchHandler(val)} />
                    </Item>
                </ListItem>
            </View>
            {(categories && categories.length > 0) &&
                <View style={{ backgroundColor: props.color }}>
                    {categories.filter(cat => search ? cat.value.includes(search) : cat.value).map((category, i) => {
                        return (
                            <View key={i}>
                                <ListItem>
                                    <Body>
                                        <Text>{category.value}</Text>
                                    </Body>
                                    <CheckBox onPress={() => categoryCheckedHandler(category)} checked={category.checked} />
                                </ListItem>
                                {category.checked &&
                                    <View>
                                        <DroddownComp text="Select Sub Product"
                                            category={category}
                                            bgColor="#D9F3F4"
                                            cardColor="#B3BEBF"
                                            subProds>
                                            <SubProducts category={category} color="#B3BEBF" />
                                        </DroddownComp>
                                    </View>
                                }
                            </View>
                        )
                    })}
                </View>
            }
            <Button info style={{ justifyContent: 'center' }} onPress={() => addCategoryHandler(true)}>
                <Text>Add Category</Text>
                <Icon type="FontAwesome" name='plus' />
            </Button>
        </Card>
    )
}

export default SubCategories