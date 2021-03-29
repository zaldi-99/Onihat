import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'

const Post = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Header />
            <Text>Post Screen</Text>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A27'
    }
})
