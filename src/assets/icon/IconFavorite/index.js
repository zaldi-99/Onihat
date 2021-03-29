import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconFavorite = ({size, color}) => {
    return (
        <View>
            <Icon name="star" size={size} color={color} />
        </View>
    )
}

export default IconFavorite

const styles = StyleSheet.create({})
