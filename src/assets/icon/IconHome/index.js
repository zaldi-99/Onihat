import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconHome = ({size, color}) => {
    return (
        <View>
            <Icon name="home" size={size} color={color} />
        </View>
    )
}

export default IconHome

const styles = StyleSheet.create({})
