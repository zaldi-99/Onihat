import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../utils'

const Information = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Text>Information about Onihat</Text>
        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A27'
    }
})
