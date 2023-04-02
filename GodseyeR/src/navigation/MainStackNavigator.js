import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';
import UserProfileScreen from '../screens/UserProfile/UserProfileScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#007bff',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
};

export default function MainStackNavigator() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ title: 'Godseye-R' }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ title: 'User Profile' }}
        />
      </Stack.Navigator>
    </>
  );
}
