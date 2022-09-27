import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import ShoppingList from './src/Features/ShoppingList/ShoppingList';

export type AuthRootParamList = {
  Home: undefined;
  ShoppingList: undefined;
};

const Stack = createNativeStackNavigator<AuthRootParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ShoppingList" component={ShoppingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
