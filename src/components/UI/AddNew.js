import React, { useState } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Button, Icon, Input, Item } from 'native-base'

const AddNew = props => {
    const [newThing, setNewThing] = useState('');

    const addNewThing = () => {
        setNewThing('');
        props.addHandler(false, newThing, props.owner)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Item regular>
                        <Input placeholder={props.placeholder} value={newThing} onChangeText={(val) => setNewThing(val)} />
                    </Item>
                    <View style={{flexDirection: 'row'}}>
                        <Button style={{ marginTop: 15, marginRight: 10 }} rounded bordered success onPress={addNewThing}>
                            <Icon type="FontAwesome" name='plus' />
                        </Button>
                        <Button style={{ marginTop: 15 }} rounded bordered danger onPress={() => props.addHandler(false)}>
                            <Icon type="FontAwesome" name='times' />
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalInput: {
        marginBottom: 15,
        textAlign: "center",
        borderWidth: 1,
        borderColor: 'gray'
    }
});

export default AddNew