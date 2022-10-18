import axios from 'axios';

import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../assets/PandaFEED.png';
import {Divider} from 'react-native-elements';

export interface Products {
  id: number;
  name: string;
  minimum: number;
  essential: boolean;
  quantity: number;
}

export interface Listproducts {
  name: string;
  quantity: number;
}

const Products = () => {
  const [fetchOnce, setFetchOnce] = useState(true);
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    axios
      .get('http:10.8.251.124:3000/products')
      .then(response => {
        setProducts(response.data);
      })

      .catch(error => {
        console.log('oups error notified------', error);
      });
  }, []);

  return (
    <ScrollView style={styles.background}>
      <LinearGradient
        colors={['#79F1a4', '#382933']}
        start={{
          x: 0.5,
          y: 2,
        }}
        end={{
          x: 1.5,
          y: 0,
        }}
        style={styles.box}>
        <View style={styles.root}>
          <Image style={[styles.Logo, {height: 535 * 0.3}]} source={Logo} />
          <View style={styles.title}>
            <Text style={styles.category}>Your products</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.bodyProduct}>
        {products?.map((item, key) => (
          <Divider
            orientation="horizontal"
            insetType="middle"
            inset={true}
            width={1}
            style={styles.divider}>
            <Text style={styles.text} key={key}>
              {item.name}
            </Text>
          </Divider>
        ))}
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#95D793',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: 'black',
  },
  bodyProduct: {
    // alignItems: 'center',
    marginTop: '30%',
    height: '100%',
    padding: 15,
    flex: 1,
  },
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  textTitle: {
    color: '#95D793',
    fontSize: 28,
    marginLeft: 20,
    textAlign: 'center',
  },
  title: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  Logo: {
    width: '30%',
    height: 20,
    maxHeight: 80,
    borderColor: '#8AC997',
    borderRadius: 180 / 1,
    overflow: 'hidden',
    borderWidth: 3,
  },
  box: {
    width: '100%',
    height: 80,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  productsbox: {
    backgroundColor: '#382933',
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
  },
  background: {
    backgroundColor: '#382933',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
  },
  category: {
    color: '#95D793',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
