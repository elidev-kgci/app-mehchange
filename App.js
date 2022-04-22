import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Provider } from "react-native-paper";
import { theme } from "./core/theme";
import { OnboardingScreen, DashboardScreen } from './screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import DrawerContent from './screens/DrawerContent';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function MyTabs() {
  return (
    <Tab.Navigator
    >
      <Tab.Screen
        name="Accueil"
        component={DashboardScreen}
        options={{ tabBarIcon: ()=> <Icon  name="home"  size={30}  color="#3b5998" />, headerShown: false, }}
      />
      <Tab.Screen
        name="Zone de change"
        component={DashboardScreen}
        options={{ tabBarIcon: ()=> <Icon  name="export"  size={30}  color="#3b5998" />, headerShown: false }}
      />
      <Tab.Screen
        name="Historiques"
        component={DashboardScreen}
        options={{ tabBarIcon: ()=> <Icon  name="dashboard"  size={30}  color="#3b5998" />, headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={DashboardScreen}
        options={{ tabBarIcon: ()=> <Icon  name="contacts"  size={30}  color="#3b5998" />, headerShown: false }}
      />
    </Tab.Navigator>
  );
}



export default function App() {

  const [isFirstLaunched, setIsFirstLaunched] = useState(null);


  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.tint,
    },
  };


  useEffect(() => {
    AsyncStorage.getItem('@alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('@alreadyLaunched', 'true');
        setIsFirstLaunched(true);
      } else {
        setIsFirstLaunched(false);
      }
    })
  }, []);


  if (isFirstLaunched === null) {
    return null;
  } else if (isFirstLaunched === true) {
    return (
        <NavigationContainer theme={MyTheme} screenOptions={{ headerShown: false }}>
          <Stack.Navigator initialRouteName='Onboarding' >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} screenOptions={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} screenOptions={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  } else {
    return (
        <NavigationContainer theme={MyTheme} >
          <Stack.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={DrawerSlide} screenOptions={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}


function DrawerSlide() {
  return (
      <Drawer.Navigator drawerContent={DrawerContent} >
          <Drawer.Screen name="Acceuil" component={MyTabs} options={{  headerTitleAlign:'center', headerStyle: {backgroundColor: '#270082',}, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      </Drawer.Navigator>
  );
}

