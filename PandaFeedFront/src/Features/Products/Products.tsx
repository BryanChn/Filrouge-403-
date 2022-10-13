import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export interface Product {
  id: number;
  name: string;
  minimum: number;
  essential: boolean;
  quantity: number;
}

const Products = () => {
  const [fetchOnce, setFetchOnce] = useState(true);

  useEffect(() => {
    if (!fetchOnce) {
      axios.get('http://localhost:3000/products').then(response => {
        try {
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
        setFetchOnce(false);
      });
    }
  });

  return (
    <View>
      <Text>PRODUCT</Text>
    </View>
  );
};

export default Products;
