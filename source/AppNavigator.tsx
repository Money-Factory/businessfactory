import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { NativeBaseProvider } from 'native-base';
import { RootNavigator } from './screens';
import {
  BaseTheme,
  getNavigationTheme,
  getThemeStatusBarBGColor,
  getThemeStatusBarStyle,
} from './utils/designSystem';
import { useServices } from './services';

const AppNavigator = (): JSX.Element => {
  useColorScheme();
  const { nav } = useServices();

  return (
    <>
      <StatusBar
        barStyle={getThemeStatusBarStyle()}
        backgroundColor={getThemeStatusBarBGColor()}
      />
      <NavigationContainer
        ref={nav.navContainer}
        onReady={nav.onReady}
        onStateChange={nav.onStateChange}
        theme={getNavigationTheme()}
      >
        <NativeBaseProvider theme={BaseTheme}>
          <RootNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
