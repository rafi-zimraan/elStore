import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GradientButton from 'react-native-gradient-buttons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  function alert(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      {/* ------------------------------------------------------------------ */}
      <View style={styles.logoBox}>
        <Text
          style={{
            fontSize: 35,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Poppins-Semibold',
          }}>
          EL
        </Text>
      </View>
      {/* ------------------------------------------------------------------- */}
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: '600',
            fontFamily: 'Poppins-Medium',
          }}>
          Login to apparel
        </Text>
      </View>
      {/* --------------------------------------------------------------------- */}

      <View style={styles.ContainerInput}>
        {/* -------------------      USER   NAME          --------------------- */}

        <View style={styles.BoxInput}>
          <Icon
            name="account-circle-outline"
            size={30}
            color={'#A8AFB9'}
            style={{position: 'absolute', left: 20}}
          />
          <TextInput
            placeholder="Username    "
            placeholderTextColor={'#A8AFB9'}
            style={styles.TextInput}
          />
        </View>

        {/* ----------------              PASSWORD       ------------------------- */}

        <View style={styles.BoxInput}>
          <Icon
            name="lock-outline"
            size={30}
            color={'#A8AFB9'}
            style={{position: 'absolute', left: 20}}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#A8AFB9'}
            secureTextEntry={true}
            style={styles.TextInput}
          />
          <TouchableOpacity
            style={{position: 'relative', left: 300, bottom: 0}}>
            <Icon name="eye-outline" size={30} color={'#A8AFB9'} />
          </TouchableOpacity>
        </View>
        {/* ------------------------------------------------------------------- */}
      </View>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: '500',
            fontFamily: 'Poppins-Medium',
          }}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      {/* --------------           Tombol          Login        ---------------- */}

      <TouchableOpacity
        style={styles.TapLogin}
        onPress={() => navigation.navigate('BottomTabScreen')}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Medium',
          }}>
          Login
        </Text>
      </TouchableOpacity>

      {/* ----------------------------------------------------------------------- */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 160,
            borderWidth: 0.5,
            marginLeft: 35,
            borderColor: 'silver',
          }}
        />
        <Text style={{paddingHorizontal: 10}}> Or </Text>
        <View
          style={{
            width: 160,
            borderWidth: 0.5,
            marginRight: 35,
            borderColor: 'silver',
          }}
        />
      </View>

      {/* --------------------------------------------------------------------- */}
      <View style={styles.BoxIcon}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/fb.png')}
            style={styles.Icon}
          />
        </TouchableOpacity>
        {/* --- */}
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/google+.png')}
            style={styles.Icon}
          />
        </TouchableOpacity>
        {/* --- */}
        <TouchableOpacity style={styles.Icon1}>
          <Image
            source={require('../../assets/images/apple.png')}
            style={{height: 25, width: 20}}
          />
        </TouchableOpacity>
      </View>
      {/* ---------------------------------------------------------------------- */}
      <View
        style={{
          marginTop: 60,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View></View>
        <Text style={{fontFamily: 'Poppins-Medium', color: 'gray'}}>
          Don't have an account?{'  '}
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#6C70EB', fontFamily: 'Poppins-Medium'}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------------------------ */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    fontFamily: 'Poppins-Semibold',
  },
  logoBox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C70EB',
    height: 80,
    width: 80,
    borderRadius: 100,
    margin: 80,
    fontFamily: 'Poppins-Semibold',
  },
  ContainerInput: {
    alignItems: 'center',
    marginTop: 30,
  },
  TextInput: {
    color: '#A8AFB9',
    paddingLeft: 65,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 19,
    position: 'absolute',
    width: '80%',
  },
  BoxInput: {
    height: 50,
    width: '85%',
    backgroundColor: 'white',
    elevation: 0.8,
    borderRadius: 15,
    justifyContent: 'center',

    margin: 15,
  },
  TapLogin: {
    height: 60,
    width: '85%',
    backgroundColor: '#6C70EB',
    elevation: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 30,
  },
  Icon: {
    height: 45,
    width: 45,
    marginHorizontal: 20,
  },
  Icon1: {
    height: 40,
    width: 40,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
