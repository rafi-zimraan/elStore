import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TabRouter, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../App';

const RecomendedProducts = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const recomendProduct = [
    {
      id: 1,
      productTitleA: 'Olive Zip-Front Jacket',
      productImageA: require('../../assets/images/product1.jpg'),
      priceA: 'Rs.909.090',
      likedA: false,
      productImageB: require('../../assets/images/product2.jpg'),
      productTitleB: "FILA Men's jas",
      priceB: 'Rs.5,999',
      likedB: false,
    },
    {
      id: 1,
      productTitleA: 'T-shirt natural man',
      productImageA: require('../../assets/images/product3.jpg'),
      priceA: 'Rs.090.090',
      likedA: false,
      productImageB: require('../../assets/images/product4.jpg'),
      productTitleB: 'Brown hat man',
      priceB: 'Rs.9,909',
      likedB: false,
    },
    {
      id: 1,
      productTitleA: 'Brown jas Men',
      productImageA: require('../../assets/images/product5.jpg'),
      priceA: 'Rs.909.909',
      likedA: false,
      productImageB: require('../../assets/images/product6.jpg'),
      productTitleB: "Men's jeans coral blue",
      priceB: 'Rs.7,999',
      likedB: false,
    },
    {
      id: 1,
      productTitleA: 'Olive Zip-Front Jacket',
      productImageA: require('../../assets/images/product1.jpg'),
      priceA: 'Rs.909.090',
      likedA: false,
      productImageB: require('../../assets/images/product2.jpg'),
      productTitleB: "FILA Men's jas",
      priceB: 'Rs.5,999',
      likedB: false,
    },
    {
      id: 1,
      productTitleA: 'T-shirt natural man',
      productImageA: require('../../assets/images/product3.jpg'),
      priceA: 'Rs.090.090',
      likedA: false,
      productImageB: require('../../assets/images/product4.jpg'),
      productTitleB: 'Brown hat man',
      priceB: 'Rs.9,909',
      likedB: false,
    },
    {
      id: 1,
      productTitleA: 'Brown jas Men',
      productImageA: require('../../assets/images/product5.jpg'),
      priceA: 'Rs.909.909',
      likedA: false,
      productImageB: require('../../assets/images/product6.jpg'),
      productTitleB: "Men's jeans coral blue",
      priceB: 'Rs.7,999',
      likedB: false,
    },
  ];
  return (
    <View style={{position: 'relative'}}>
      {/* -------         R E C O M E N D E D        T E X T           --------- */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 20,
          position: 'relative',
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              marginLeft: -60,

              fontWeight: '600',
              fontSize: 18,
              color: 'black',
            }}>
            Recommended
          </Text>
        </View>

        <TouchableOpacity>
          <Text
            style={{fontFamily: 'Poppins-Medium', marginRight: -60}}
            onPress={() => navigation.navigate('HomeScreenFullProduct')}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------------------------ */}

      <ScrollView
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
        style={{height: '100%'}}>
        {recomendProduct.map((data, index) => {
          const [likeA, setlikeA] = useState(data.likedA);
          const [likeB, setlikeB] = useState(data.likedB);
          return (
            <View style={{flexDirection: 'column'}} key={index}>
              {/* =============      P R O D U C T   O N E     ( A - B )     ===================*/}

              {data.id == 1 ? (
                <View style={styles.ContainerProduct1}>
                  <View>
                    <TouchableOpacity
                      style={styles.BoxProductA}
                      onPress={() =>
                        navigation.navigate('HomeScreenFullProduct')
                      }>
                      <Image
                        source={data.productImageA}
                        style={styles.ImageProductA}
                      />
                    </TouchableOpacity>
                    <Text style={styles.titleA}>{data.productTitleA}</Text>
                    <Text style={styles.priceA}>{data.priceA}</Text>
                    <TouchableOpacity
                      onPress={() => setlikeA(!likeA)}
                      style={styles.BoxLoveA}>
                      <Icon
                        name={likeA ? 'heart' : 'heart-outline'}
                        size={20}
                        style={{
                          color: likeA ? '#6C70EB' : 'black',
                        }}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* ----------------------------------------------- */}

                  <View>
                    <TouchableOpacity
                      style={styles.BoxProductB}
                      onPress={() =>
                        navigation.navigate('HomeScreenFullProduct')
                      }>
                      <Image
                        source={data.productImageB}
                        style={styles.ImageProductB}
                      />
                    </TouchableOpacity>
                    <Text style={styles.titleB}>{data.productTitleB}</Text>
                    <Text style={styles.priceB}>{data.priceB}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setlikeB(!likeB)}
                    style={styles.BoxLoveB}>
                    <Icon
                      name={likeB ? 'heart' : 'heart-outline'}
                      size={20}
                      style={{
                        color: likeB ? '#6C70EB' : 'black',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}

              {/* ========================================================================== */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RecomendedProducts;

const styles = StyleSheet.create({
  ContainerProduct1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },

  ////////////////////////////////////////////////////////////////////////////

  BoxProductA: {
    borderRadius: 20,
    width: 170,
    height: 175,
    elevation: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageProductA: {
    height: 175,
    width: 178,
    borderRadius: 20,
  },
  titleA: {
    fontFamily: 'Poppins-Medium',
    marginTop: 5,
    color: 'black',
  },
  priceA: {fontFamily: 'Poppins-Medium', color: 'gray'},

  BoxLoveA: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 125,
    top: 20,
    borderRadius: 100,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///////////////////////////////////////////////////////////////////////////////

  BoxProductB: {
    borderRadius: 20,
    width: 170,
    height: 175,
    elevation: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageProductB: {
    height: 175,
    width: 178,
    borderRadius: 20,
  },
  titleB: {fontFamily: 'Poppins-Medium', marginTop: 5, color: 'black'},

  priceB: {fontFamily: 'Poppins-Medium', color: 'gray'},

  BoxLoveB: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 30,
    top: 20,
    borderRadius: 100,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // /////////////////////////////////////////////////////////////////////////////
});
