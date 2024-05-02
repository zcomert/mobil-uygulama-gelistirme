import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header/Header";
import Categories from "./src/components/categories/Categories";
import Events from "./src/components/events/Events";
import CategoryHeader from "./src/components/categories/CategoryHeader";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/HomeScreen";
import CampusScreen from "./src/screens/Campus/CampusScreen";
import AcademicScreen from "./src/screens/Academic/AcademicScreen";
import AdministrativeScreen from "./src/screens/Administrative/AdministrativeScreen";
import StudentsScreen from "./src/screens/Student/StudentsScreen";
import SpeakerScreen from "./src/screens/Speaker/SpeakerScreen";
import Navigation from "./src/components/navigation/Navigation";
import { AppProvider } from "./src/context/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Ana Sayfa",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CampusScreen"
            component={CampusScreen}
            options={{
              title: "Yerleşkeler",
            }}
          />

          <Stack.Screen
            name="AcademicScreen"
            component={AcademicScreen}
            options={{
              title: "Akademik",
            }}
          />

          <Stack.Screen
            name="AdministrativeScreen"
            component={AdministrativeScreen}
            options={{
              title: "İdari",
            }}
          />
          <Stack.Screen
            name="StudentScreen"
            component={StudentsScreen}
            options={{
              title: "Öğrenciler",
            }}
          />
          <Stack.Screen
            name="SpeakerScreen"
            component={SpeakerScreen}
            options={{
              title: "Konuşmacı",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({});
