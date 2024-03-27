import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import { Zocial } from '@expo/vector-icons';


const Search = () =>
{
    return (
        <View style={styles.searchContainer}>
            <View style={styles.col1}>
                <Zocial name="macstore" size={32} color={Colors.white} />
            </View>
            <View style={styles.col2}>
                <View style={styles.searchInputContainer}>
                    <TextInput
                        placeholder='Aranacak ifadeyi giriniz.'
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    searchContainer: {
        padding: 16,
        flexDirection: 'row'
    },
    col1: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    col2: {
        flex: .8
    },
    searchInputContainer: {
        backgroundColor: Colors.white,
        padding: 8,
        borderRadius: 5,
    },
    logo: {

    }
})
export default Search