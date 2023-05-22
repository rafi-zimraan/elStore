import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favorites from './Favorites';
import CheckOut from './CheckOut';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {height: 70},

        tabBarIcon: ({focused, size, color}) => {
          let iconName: any;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            color = focused ? '#6C70EB' : 'gray';
            size = focused ? size + 12 : size + 5;
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart';
            color = focused ? '#6C70EB' : 'gray';
            size = focused ? size + 12 : size + 5;
          } else if (route.name === 'Check out') {
            iconName = focused ? 'cart' : 'cart';
            color = focused ? '#6C70EB' : 'gray';
            size = focused ? size + 12 : size + 5;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Check out" component={CheckOut} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

const styles = StyleSheet.create({});
