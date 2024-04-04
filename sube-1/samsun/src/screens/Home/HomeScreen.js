import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import Categories from '../../components/categories/Categories'
import Events from '../../components/events/Events'

const HomeScreen = () => {
    return (
        <View>
            {/* <Header /> */}
            <Categories />
            {/* <Events /> */}
        </View>
    )
}

export default HomeScreen