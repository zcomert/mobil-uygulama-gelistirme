import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const CategoryHeader = ({ name, icon }) =>
{
    return (
        <View style={styles.row1}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{name}</Text>
            </View>
            <View style={styles.icon}>
                <FontAwesome5 name={icon} size={24} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row1: {
        marginVertical: 16,
        flexDirection: 'row',
        paddingTop: 16,
    },
    header: {
        flex: .8
    },
    headerText: {
        // color: Colors.primary500,
        // fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 48
    },
    icon: {
        flex: .2
    },
})

export default CategoryHeader