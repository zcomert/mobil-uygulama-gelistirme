import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import Colors from '../../constants/colors'

const CategoryIcon = ({ icon }) =>
{
    return (
        <View style={styles.container}>
            <FontAwesome5
                name={icon} size={32}
                color={Colors.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        padding: 8,
        margin: 8,
        marginHorizontal: 24,
        borderRadius: 100,
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryIcon