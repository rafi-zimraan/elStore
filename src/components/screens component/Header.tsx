import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

interface Props {
  nameIcon1Header: string;
  nameIcon2Header: string;
  textHeader: string;
}

const MyHeader: React.FC<Props> = ({
  nameIcon1Header,
  textHeader,
  nameIcon2Header,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        height: 80,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeUtama')}>
        <Icon
          name={nameIcon1Header}
          size={30}
          color={'black'}
          style={{marginLeft: -30}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontWeight: '500',
          fontSize: 20,
          color: 'black',
        }}>
        {textHeader}
      </Text>
      <TouchableOpacity>
        <Feather
          name={nameIcon2Header}
          size={25}
          color={'black'}
          style={{marginRight: -30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({});
