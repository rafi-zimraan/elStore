import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const MySearchhBar = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <TextInput
        placeholder="Search for tshirts, jeans, shorts, jackets"
        style={{
          backgroundColor: '#EDEEEF',
          margin: 25,
          marginBottom: -0,
          height: 75,
          borderRadius: 15,
          color: 'gray',
          fontFamily: 'Poppins-Medium',
          paddingLeft: 50,
          position: 'relative',
        }}
      />
      <Feather
        name="search"
        size={25}
        color={'gray'}
        style={{position: 'absolute', left: 40, top: 48}}
      />
    </View>
  );
};

export default MySearchhBar;

const styles = StyleSheet.create({});
