import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../../assets/PandaFEED.png';
import LinearGradient from 'react-native-linear-gradient';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthRootParamList} from '../../App';
import {Button} from '@react-native-material/core';
import {ScrollView} from 'react-native-gesture-handler';

type ScreenNavigationProp = NativeStackNavigationProp<AuthRootParamList>;

type Props = {
  navigation: ScreenNavigationProp;
};

const Home = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.background}>
      <LinearGradient
        colors={['#79F1a4', '#382933']}
        start={{
          x: 0,
          y: 2,
        }}
        end={{
          x: 2,
          y: 0,
        }}
        style={styles.box}>
        <View style={styles.root}>
          <Image style={[styles.Logo, {height: 1070 * 0.3}]} source={Logo} />
          <View style={styles.title}>
            <Text style={styles.textTitle}>Welcome to PandaFeed !</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.body}>
        <Text style={styles.textBody}>
          PandaFeed is an application that helps you manage your diet. You can
          add products, it's like your inventory. Every product has a quantity,
          a minimum quantity and whether it is essential or not. Every time you
          take a product, the quantity will be updated. If the quantity of the
          product reaches the minimum quantity or lower than the one you have
          chosen the product will be added to your shoppingList. If the product
          is essential a notification will be sent to you that the product has
          been added. If the product is non-essential then a notification will
          ask you for permission to add this product to your shoppingList.
        </Text>
        <Button
          style={styles.button}
          color="#79F1a4"
          tintColor="black"
          variant="contained"
          onPress={() => navigation.navigate('Products')}
          title="Start add your Product !"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  background: {
    backgroundColor: '#382933',
  },
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },

  Logo: {
    width: '70%',
    height: 175,
    maxHeight: 200,
    borderColor: '#8AC997',
    borderRadius: 180 / 1,
    overflow: 'hidden',
    borderWidth: 3,
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
  box: {
    width: '100%',
    height: 200,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  body: {
    alignItems: 'center',
    marginTop: '25%',
    height: '100%',
  },
  textBody: {
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#95D793',
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default Home;
