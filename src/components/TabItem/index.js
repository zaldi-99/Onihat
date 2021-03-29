import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IconFavorite, IconHome, IconPost } from '../../assets/icon'

const TabItem = ({type, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(type === 'Home'){
            return active ? <IconHome size={40} color='purple' /> : <IconHome size={40} color='#5158A2' />
        }
        if(type === 'Post'){
            return active ? <IconPost size={40} color='purple' /> : <IconPost size={40} color='#5158A2' />
        }
        if(type === 'Favorite'){
            return active ? <IconFavorite size={40} color='purple' /> : <IconFavorite size={40} color='#5158A2' />
        }
        return <IconHome />
    }
    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}> 
            <Icon />
            {/* <Text>Item comp</Text> */}
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({})
