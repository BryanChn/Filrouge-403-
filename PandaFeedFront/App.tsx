import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/Screens/Home';
import ShoppingList from './src/Features/ShoppingList/ShoppingList';
import Products from './src/Features/Products/Products';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text} from 'react-native';

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
        barStyle={{backgroundColor: '#282c34', height: 60}}
        activeColor="#95D793"
        inactiveColor="lightgray"
        shifting={true}
        labeled={false}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" size={25} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="ShoppingList"
          component={ShoppingList}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="cart-plus"
                size={25}
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarIcon: ({color = 'red'}) => (
              <MaterialCommunityIcons name="baguette" size={25} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
