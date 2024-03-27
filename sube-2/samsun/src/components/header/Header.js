import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import React from 'react'
import Search from '../search/Search'
import Profile from '../profile/Profile'


const Header = () =>
{
    return (
        <View style={styles.headerContainer}>
            <View>
                <Search />
            </View>
            <View>
                <Profile />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 48,
        backgroundColor: Colors.primary500,

    }
})

export default Header