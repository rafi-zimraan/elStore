import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

const ProductScrools = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const ProductScrool = [
    {
      id: 1,
      productTitle: 'Men',
      productImage: require('../../assets/images/proimg1.png'),
    },
    {
      id: 3,
      productTitle: 'Laptop',
      productImage: require('../../assets/images/laptop.png'),
    },
    {
      id: 2,
      productTitle: 'Men',
      productImage: require('../../assets/images/proimg1.png'),
    },
    {
      id: 3,
      productTitle: 'Electronic',
      productImage: require('../../assets/images/headset.png'),
    },
    {
      id: 1,
      productTitle: 'Men',
      productImage: require('../../assets/images/proimg1.png'),
    },
    {
      id: 3,
      productTitle: 'Laptop',
      productImage: require('../../assets/images/laptop.png'),
    },
    {
      id: 2,
      productTitle: 'Men',
      productImage: require('../../assets/images/proimg1.png'),
    },
  ];

  return (
    <View
      style={{backgroundColor: 'white', height: 240, justifyContent: 'center'}}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        style={{
          maxHeight: 250,
        }}>
        {ProductScrool.map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ScreenCategories')}
              key={index}
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                marginTop: 40,
              }}>
              {data.id == 1 ? (
                <View style={styles.boxProduct}>
                  <Image
                    source={data.productImage}
                    style={{
                      position: 'absolute',
                      left: 90,
                      top: -49,
                    }}
                  />
                </View>
              ) : null}
              {data.id == 2 ? (
                <View style={styles.boxProduct2}>
                  <Image
                    source={data.productImage}
                    style={{
                      position: 'absolute',
                      left: 90,
                      top: -49,
                    }}
                  />
                </View>
              ) : null}
              {data.id == 3 ? (
                <View style={styles.boxProduct3}>
                  <Image
                    source={data.productImage}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 80,
                      height: 220,
                      width: 220,
                    }}
                  />
                </View>
              ) : null}

              <View style={styles.titleProduct}>
                <Text style={styles.titleProductText}>{data.productTitle}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProductScrools;

const styles = StyleSheet.create({
  titleProduct: {
    position: 'absolute',
    bottom: 130,
    left: 50,
    color: 'white',
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  titleProductText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  boxProduct: {
    backgroundColor: '#6C70EB',
    height: 190,
    width: 300,
    borderRadius: 20,
  },
  boxProduct2: {
    backgroundColor: '#6C70EB',
    height: 190,
    width: 300,
    borderRadius: 20,
  },
  boxProduct3: {
    backgroundColor: '#7BCFFF',
    height: 190,
    width: 300,
    borderRadius: 20,
  },
});
