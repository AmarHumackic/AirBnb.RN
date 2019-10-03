import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Inbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Inbox </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Inbox;