import { Platform } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { BaseTheme, getHeaderBlurEffect } from '../../utils/designSystem';

export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTintColor: BaseTheme.colors.primary.toString(),

  // this setup makes large title work on iOS
  ...Platform.select({
    ios: {
      headerLargeTitle: true,
      headerTransparent: true,
      headerBlurEffect: getHeaderBlurEffect(), // this sets up blurred nav bar
      // if you'd like to have a solid color for a nav bar, then you should
      // set up `headerStyle: {backgroundColor: Colors.bg2Color}`
    },
  }),
});

export const tabBarDefaultOptions = (): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarActiveTintColor: BaseTheme.colors.primary.toString(),
  tabBarInactiveTintColor: BaseTheme.colors.gray.toString(),
  tabBarStyle: {
    backgroundColor: BaseTheme.colors.rose.toString(),
    borderTopWidth: 0,
    elevation: 0,
  },
});
