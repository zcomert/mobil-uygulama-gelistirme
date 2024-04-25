import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/Home/HomeScreen';
import CampusScreen from '../../screens/Campus/CampusScreen';
import AcademicScreen from '../../screens/Academic/AcademicScreen';
import AdministrativeScreen from '../../screens/Administrative/AdministrativeScreen';
import StudentsScreen from '../../screens/Student/StudentsScreen';
import SpeakerScreen from '../../screens/Speaker/SpeakerScreen';
import Tab1 from '../../screens/Student/Tab1'
import Tab2 from '../../screens/Student/Tab2'
import Tab3 from '../../screens/Student/Tab3'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../../constants/colors';

const StudentTopTab = createMaterialTopTabNavigator();

const StudentTabGroup = () => (
    <StudentTopTab.Navigator screenOptions={{
        tabBarIndicatorStyle: {
            height: 5,
            backgroundColor: Colors.secondary500,
        },
        tabBarLabelStyle: {
            textTransform: 'capitalize'
        }
    }}>
        <StudentTopTab.Screen name="Tab1" component={Tab1} />
        <StudentTopTab.Screen name="Tab2" component={Tab2} />
        <StudentTopTab.Screen name="Tab3" component={Tab3} />
    </StudentTopTab.Navigator>
)

const HomeStack = createNativeStackNavigator();

const HomeGroup = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Ana Sayfa',
                    headerShown: false
                }}

            />
            <HomeStack.Screen
                name="CampusScreen"
                component={CampusScreen} />

            <HomeStack.Screen
                name="AcademicScreen"
                component={AcademicScreen} />

            <HomeStack.Screen name="AdministrativeScreen" component={AdministrativeScreen} />
            <HomeStack.Screen name="StudentTabGroup" component={StudentTabGroup} />
            <HomeStack.Screen name="SpeakerScreen"
                component={SpeakerScreen}
                options={{
                    presentation:"modal"
                }}
            />
        </HomeStack.Navigator>
    )
}

const Navigation = () => {
    return (
        <HomeGroup />
    )
}

export default Navigation