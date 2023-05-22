import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyHeader from './Header';
import TabBarTop from '@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar';
import {TabBar} from 'react-native-tab-view';

const TopTabCategories = (props: any) => {
  const text = [
    {
      text1: 'Men',
    },
  ];
  const Tab = createMaterialTopTabNavigator();
  function Men() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="MaaN" />
      </View>
    );
  }
  function Women() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Womssdsden" />
      </View>
    );
  }
  function Kids() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Kidsssdsd" />
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({})}
      tabBar={props => (
        <View>
          <MyHeader
            nameIcon1Header={'arrow-left'}
            nameIcon2Header={'search'}
            textHeader={'Categories'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              backgroundColor: 'white',
              height: 55,
              paddingBottom: 15,
            }}>
            <Text style={styles.textTabBar}>Men</Text>
            <Text style={styles.textTabBar}>Woman</Text>
            <Text style={styles.textTabBar}>Kids</Text>
          </View>
          <TabBar
            indicatorStyle={{backgroundColor: '#6C70EB', height: 3}}
            style={{backgroundColor: 'white', height: 0}}
            navigationState={{
              index: 0,
              routes: [],
            }}
            {...props}
          />
        </View>
      )}>
      <Tab.Screen name="Men" component={Men} options={{tabBarLabel: 'Men'}} />
      <Tab.Screen name="Women" component={Women} />
      <Tab.Screen name="Kids" component={Kids} />
    </Tab.Navigator>
  );
};

export default TopTabCategories;

const styles = StyleSheet.create({
  textTabBar: {
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
});
