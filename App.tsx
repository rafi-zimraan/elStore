import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from './src/components/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/screens/Login';
import BottomTabScreen from './src/components/screens/BottomTabScreen';

export type RootStackParams = {
  Splash: undefined;
  Login: undefined;
  BottomTabScreen: undefined;
  HomeScreenFull: undefined;
  HomeScreenFullProduct: undefined;
  HomeUtama: undefined;
  ScreenCategories: undefined;
};
const App = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
