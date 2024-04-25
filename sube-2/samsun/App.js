import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/Header';
import Categories from './src/components/categories/Categories';
import Events from './src/components/events/Events';
import CategoryHeader from './src/components/categories/CategoryHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen'
import CampusScreen from './src/screens/Campus/CampusScreen'
import AcademicScreen from './src/screens/Academic/AcademicScreen'
import AdministrativeScreen from './src/screens/Administrative/AdministrativeScreen'
import StudentsScreen from './src/screens/Student/StudentsScreen'
import SpeakerScreen from './src/screens/Speaker/SpeakerScreen'
import Navigation from './src/components/navigation/Navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
