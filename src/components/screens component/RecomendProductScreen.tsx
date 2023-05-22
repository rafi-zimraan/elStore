import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
const RecomendProductScreen = () => {
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
    <View style={styles.ContainerProduct1}>
      {recomendProduct.map((data, index) => {
        const [likeA, setlikeA] = useState(data.likedA);
        const [likeB, setlikeB] = useState(data.likedB);
        return (
          <View style={{flexDirection: 'column'}} key={index}>
            {/* =============      P R O D U C T   O N E     ( A - B )     ===================*/}

            {data.id == 1 ? (
              <View>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity style={styles.BoxProductA}>
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
                  <TouchableOpacity style={styles.ButtonPlusA}>
                    <Icon name="plus" size={25} color={'black'} />
                  </TouchableOpacity>
                </View>

                {/* ----------------------------------------------- */}

                <View style={{marginTop: 10}}>
                  <TouchableOpacity style={styles.BoxProductB}>
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
                <TouchableOpacity style={styles.ButtonPlusB}>
                  <Icon name="plus" size={25} color={'black'} />
                </TouchableOpacity>
              </View>
            ) : null}

            {/* ========================================================================== */}
          </View>
        );
      })}
      <View style={{height: 15}}></View>
    </View>
  );
};

export default RecomendProductScreen;

const styles = StyleSheet.create({
  ContainerProduct1: {
    marginTop: 30,
    marginHorizontal: 25,
  },

  ////////////////////////////////////////////////////////////////////////////

  BoxProductA: {
    borderRadius: 16,
    width: 355,
    height: 275,
    elevation: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageProductA: {
    height: 275,
    width: 355,
    borderRadius: 16,
  },
  titleA: {
    fontFamily: 'Poppins-Medium',
    marginTop: 15,
    color: 'black',
    fontSize: 20,
  },
  priceA: {fontFamily: 'Poppins-Medium', color: 'gray', fontSize: 15},

  BoxLoveA: {
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

  ButtonPlusA: {
    position: 'absolute',
    right: 20,
    top: 290,
  },

  ///////////////////////////////////////////////////////////////////////////////

  BoxProductB: {
    borderRadius: 16,
    width: 355,
    height: 275,
    elevation: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageProductB: {
    width: 355,
    height: 275,
    borderRadius: 16,
  },
  titleB: {
    fontFamily: 'Poppins-Medium',
    marginTop: 15,
    color: 'black',
    fontSize: 20,
  },

  priceB: {
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    fontSize: 15,
  },

  BoxLoveB: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 30,
    bottom: 300,
    borderRadius: 100,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonPlusB: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
});
