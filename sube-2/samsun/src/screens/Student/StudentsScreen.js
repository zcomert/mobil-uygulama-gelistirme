import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StudentsScreen = () =>
{
    return (
        <View style={styles.container}>
            <Text>Öğrenciler ekranına hoş geldiniz.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default StudentsScreen