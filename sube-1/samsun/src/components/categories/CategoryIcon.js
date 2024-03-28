import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const CategoryIcon = ({icon,name}) =>
{
    return (
        <View>
            <Text>{name}</Text>
            <FontAwesome5 name={icon} size={24} color="black" />
        </View>
    )
}

export default CategoryIcon