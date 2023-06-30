import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from './pages/menu';
import Questions from './pages/questions';
import Login from './pages/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Menu' component={Menu}/>
      <Stack.Screen name='Questions' component={Questions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}