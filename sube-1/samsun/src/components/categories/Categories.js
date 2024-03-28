import { View, Text } from 'react-native'
import React from 'react'
import CategoryHeader from './CategoryHeader'

const Categories = () =>
{
    return (
        <View>
            <CategoryHeader name="Kategoriler" />
            <Text>Categories</Text>
        </View>
    )
}

export default Categories