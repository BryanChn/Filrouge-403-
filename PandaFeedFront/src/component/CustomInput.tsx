import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
const CustomInput = ({value, setValue, placeholder, secureTextEntry}: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#95D793',
    borderWidth: 1.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 25,
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
export default CustomInput;
