import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import {iRootStackParamList} from './interfaces/iRootStackParamList';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpPersonalDataScreen from '../screens/SignUpPersonalDataScreen/SignUpPersonalDataScreen';
import SignUpFinishedScreen from '../screens/SignUpFinishedScreen/SignUpFinishedScreen';
import SignUpSkillsScreen from '../screens/SignUpSkillsScreen/SignUpSkillsScreen';
import SignUpAvailabilityScreen from '../screens/SignUpAvailabilityScreen/SignUpAvailabilityScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator<iRootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="SignUpPersonalDataScreen"
          component={SignUpPersonalDataScreen}
        />
        <Stack.Screen
          name="SignUpSkillsScreen"
          component={SignUpSkillsScreen}
        />
        <Stack.Screen
          name="SignUpAvailabilityScreen"
          component={SignUpAvailabilityScreen}
        />
        <Stack.Screen
          name="SignUpFinishedScreen"
          component={SignUpFinishedScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
