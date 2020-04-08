import React from 'react';
import { Platform } from 'react-native'
import { Container } from 'native-base';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Products from './Products';
import CustomHeaderButton from './UI/CustomHeaderButton';

const MainPage = props => {
    return (
        <Container>
            <Products />
        </Container>
    )
}

MainPage.navigationOptions = navData => {
    return {
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    iconName={
                        Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
                    }
                    onPress={() => {
                        navData.navigation.navigate('Done')
                    }}
                />
            </HeaderButtons>
        )
    }
}

export default MainPage;
