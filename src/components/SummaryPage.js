import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Body, Button, Container, Icon } from 'native-base';

import * as actions from '../store/actions'

const Summary = props => {
    const dispatch = useDispatch();
    const selectedProducts = useSelector(state => state.mainReducer.products).filter(prod => prod.checked).map(prod => prod.value).join(", ");
    const selectedCategories = useSelector(state => state.mainReducer.categories).filter(cat => cat.checked).map(cat => cat.value).join(", ");
    const selectedSubProducts = useSelector(state => state.mainReducer.subProducts).filter(subProd => subProd.checked).map(subProd => subProd.value).join(", ");

    const done = () => {
        dispatch(actions.reset());
        props.navigation.navigate('Products')
    }

    return (
        <Container>
            <Card>
                <CardItem header bordered>
                    <Text style={styles.header}>Products</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{selectedProducts}</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered>
                    <Text style={styles.header}>Sub Categories</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{selectedCategories}</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem header bordered>
                    <Text style={styles.header}>Sub Products</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{selectedSubProducts}</Text>
                    </Body>
                </CardItem>
            </Card>
            <View style={{alignItems: 'center', marginTop: 50}}>
                <Button style={{ justifyContent: 'center', width: '40%' }} success onPress={done}>
                    <Icon type="FontAwesome" name="check" />
                </Button>
            </View>
        </Container>
    )
}

Summary.navigationOptions = navData => {
    return {
        headerTitle: 'Result'
    }
}

const styles = StyleSheet.create({
    header: {
        color: 'blue',
        fontSize: 20
    }
})

export default Summary