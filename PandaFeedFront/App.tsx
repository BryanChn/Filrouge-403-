import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/Screens/Home';
import ShoppingList from './src/Features/ShoppingList/ShoppingList';
import Products from './src/Features/Products/Products';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

export type AuthRootParamList = {
  Home: undefined;
  ShoppingList: undefined;
  Products: undefined;
};

const BottomTab = createMaterialBottomTabNavigator<AuthRootParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        barStyle={{backgroundColor: '#382933'}}
        activeColor="#79F1a4">
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="ShoppingList" component={ShoppingList} />
        <BottomTab.Screen name="Products" component={Products} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
