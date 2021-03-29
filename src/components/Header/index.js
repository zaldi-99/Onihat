import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Logo-Onihat-Small.png')} style={styles.img} />
            <TouchableOpacity onPress={onPress}>
                <Icon name="info" size={40} color={'purple'}/>
            </TouchableOpacity>
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#181A27',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img: {
        width: 180,
        height: 55
    }
})
