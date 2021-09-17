
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/LogIn'
import SignUP from '../screen/SignUp';
import Home from "../screen/Home";


const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen  name="SignUP" component={SignUP} />
        <Stack.Screen options={{headerShown:false}} name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;