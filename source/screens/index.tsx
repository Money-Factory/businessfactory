import {
    ModalScreenLayouts,
    ScreenLayouts,
    TabScreenLayouts,
  } from '../services/navigation/types';
  
  import Main from './main';
  import {
    genRootNavigator,
    genStackNavigator,
    genTabNavigator,
  } from '../services/navigation/help';
  import {
    screenDefaultOptions,
    tabBarDefaultOptions,
  } from '../services/navigation/options';
  import Settings from './settings';
  
  export type Tabs = 'Main' | 'Settings';
  export type Modal = 'ExampleModal';
  export type Screen = 'Main' | 'Settings';
  
  export type ModalProps = {
    ExampleModal: undefined;
  };
  export type ScreenProps = {
    Main: undefined;
    Settings: undefined;
  } & ModalProps;
  
  // Screens
  const screens: ScreenLayouts = {
    Main: {
      name: 'Main',
      component: Main,
      options: () => ({
        title: 'Home',
        ...screenDefaultOptions(),
      }),
    },
    Settings: {
      name: 'Settings',
      component: Settings,
      options: () => ({
        title: 'Settings',
        ...screenDefaultOptions(),
      }),
    },
  };

  const HomeStack = () => genStackNavigator([screens.Main]);
  const SettingsStack = () => genStackNavigator([screens.Settings]);
  const ExampleModalStack = () => genStackNavigator([screens.Main]);
  
  // Tabs
  const tabs: TabScreenLayouts = {
    Main: {
      name: 'MainNavigator',
      component: HomeStack,
      options: () => ({
        title: 'Home',
        ...tabBarDefaultOptions(),
      }),
    },
    Settings: {
      name: 'SettingsNavigator',
      component: SettingsStack,
      options: () => ({
        title: 'Settings',
        ...tabBarDefaultOptions(),
      }),
    },
  };
  const TabNavigator = () => genTabNavigator([tabs.Main, tabs.Settings]);
  
  // Modals
  const modals: ModalScreenLayouts = {
    ExampleModal: {
      name: 'ExampleModal',
      component: ExampleModalStack,
      options: () => ({
        title: 'ExampleModal',
      }),
    },
  };
  
  // Root Navigator
  export const RootNavigator = (): JSX.Element =>
    genRootNavigator(TabNavigator, [modals.ExampleModal]);
  