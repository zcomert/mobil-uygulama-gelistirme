import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen'
import CampusScreen from './src/screens/Campus/CampusScreen'
import AcademicScreen from './src/screens/Academic/AcademicScreen'
import SpeakerScreen from './src/screens/Speaker/SpeakerScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Samsun Üniversitesi",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CampusScreen"
          component={CampusScreen} />
        <Stack.Screen
          name="AcademicScreen"
          component={AcademicScreen} />

        <Stack.Screen
          name="SpeakerScreen"
          component={SpeakerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
