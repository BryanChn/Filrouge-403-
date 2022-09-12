import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Logo from './assets/PandaFEED.png';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image
          style={[styles.Logo, {height: 1750 * 0.3}]}
          resizeMode="contain"
          source={Logo}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    backgroundColor: '#8AC997',
  },

  Logo: {
    width: '70%',
    height: 175,
    maxHeight: 200,
  },
});
export default App;
