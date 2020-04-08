import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Icon } from 'native-base';

const DropdownButton = props => {
    const [btnClicked, setBtnClicked] = useState(false)

    const btnHandler = () => {
        setBtnClicked(!btnClicked)
    }

    const subProducts = () => {
        return (
            <View style={{ backgroundColor: props.bgColor }}>
                <Button style={{ color: '#2B0775' }} onPress={() => btnHandler()} iconRight light>
                    <Text>{props.text}</Text>
                    <Icon name={!btnClicked ? 'arrow-down' : 'arrow-up'} />
                </Button>
                {(btnClicked) && props.children}
            </View>
        )
    }

    const subCategories = () => {
        return (
            <View style={{ backgroundColor: props.bgColor }}>
                <Button style={{ color: '#2B0775' }} onPress={() => btnHandler()} iconRight light>
                    <Text>{props.text}</Text>
                    <Icon name={!btnClicked ? 'arrow-down' : 'arrow-up'} />
                </Button>
                {(btnClicked) && props.children}
            </View>
        )
    }

    return (
        props.subProds ? subProducts() : subCategories()
    )
}
export default DropdownButton