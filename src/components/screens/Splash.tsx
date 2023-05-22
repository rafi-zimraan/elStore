import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Splash = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6C70EB',
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 50,
          fontFamily: 'Poppins-SemiBold',
        }}>
        EL Store
      </Text>
      <View style={{position: 'absolute', bottom: 100}}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
