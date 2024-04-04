import { View, Text } from 'react-native'
import React from 'react'
import Categories from '../../components/categories/Categories'
import Events from '../../components/events/Events'
import Header from '../../components/header/Header'

const HomeScreen = ({ navigation }) =>
{
    return (
        <View>
            <Header />
            <Categories />
            <Events navigation={navigation} />
        </View>
    )
}

export default HomeScreen