import axios from 'axios';

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Products {
  id: number;
  name: string;
  minimum: number;
  essential: boolean;
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
        console.log('products--------', products);
      })

      .catch(error => {
        console.log('oups error notified------', error);
      });
  }, []);
  console.log(products);

  return (
    <View>
      {products?.map((item, key) => (
        <Text style={styles.text} key={key}>
          {item.name}
          {item.minimum}
          {item.essential}
          {item.quantity}
        </Text>
      ))}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
