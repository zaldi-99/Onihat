import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconPost = ({size, color}) => {
    return (
        <View>
            <Icon name="add" size={size} color={color} />
        </View>
    )
}

export default IconPost

const styles = StyleSheet.create({})
