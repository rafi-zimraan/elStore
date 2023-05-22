import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';

import ProductScrools from '../screens component/ProductScrools';
import RecomendedProducts from '../screens component/RecomendedProducts';
import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';
import RecomendProductScreen from '../screens component/RecomendProductScreen';
import MyHeader from '../screens component/Header';
import MySearchhBar from '../screens component/SeaechBar';
import TopTabCategories from '../screens component/TopTabCategories';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const Stack = createNativeStackNavigator<RootStackParams>();

  function HomeUtama() {
    return (
      <View style={styles.mainContainer}>
        <MyHeader
          nameIcon1Header="menu"
          textHeader="ELSTORE"
          nameIcon2Header="bell"
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={true}>
          <MySearchhBar />
          <ProductScrools />
          <RecomendedProducts />
        </ScrollView>
      </View>
    );
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function HomeScreenFullProduct() {
    return (
      <View style={styles.mainContainer}>
        <MyHeader
          nameIcon1Header="menu"
          textHeader="ELSTORE"
          nameIcon2Header="bell"
        />

        <ScrollView
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}>
          <MySearchhBar />

          <RecomendProductScreen />
        </ScrollView>
      </View>
    );
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeUtama" component={HomeUtama} />
      <Stack.Screen
        name="HomeScreenFullProduct"
        component={HomeScreenFullProduct}
      />
      <Stack.Screen name="ScreenCategories" component={TopTabCategories} />
    </Stack.Navigator>
  );
};
export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
