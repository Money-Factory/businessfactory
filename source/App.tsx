import 'expo-dev-client';
import { registerRootComponent } from 'expo';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';

import { NativeBaseProvider } from 'native-base';
import AppNavigator from './AppNavigator';
import { BaseTheme } from './utils/designSystem';
import { initServices, ServicesProvider } from './services';

LogBox.ignoreLogs(['Require']);

const App = (): JSX.Element => {
  const [ready, setReady] = useState(false);

  const startApp = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync();

    await initServices();

    setReady(true);
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    startApp();
  }, [startApp]);

  return (
    <NativeBaseProvider theme={BaseTheme}>
      <ServicesProvider>{ready ? <AppNavigator /> : null}</ServicesProvider>
    </NativeBaseProvider>
  );
};

export default registerRootComponent(App);
