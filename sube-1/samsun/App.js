import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/Header';
import Categories from './src/components/categories/Categories';
import Events from './src/components/events/Events';
import CategoryHeader from './src/components/categories/CategoryHeader';

export default function App()
{
  return (
    <View>
      <Header />
      <Categories />
      <Events />
    </View>
  );
}

const styles = StyleSheet.create({

});
