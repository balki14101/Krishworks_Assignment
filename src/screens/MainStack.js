import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import MainScreen from './MainScreen';
import SettingsScreen from './SettingsScreen';
import Gallery from './stackScreens/Gallery';
import ContactUs from './stackScreens/ContactUs';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SettingStack" component={SettingsScreen} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );
};

export default MainStack;
