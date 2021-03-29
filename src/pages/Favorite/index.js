import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'

const Favorite = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Header />
            <Text>Favorite Screen</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A27'
    }
})
