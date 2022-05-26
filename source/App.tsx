import 'expo-dev-client';
import { registerRootComponent } from 'expo';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';

import AppNavigator from './AppNavigator';
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
      <ServicesProvider>{ready ? <AppNavigator /> : null}</ServicesProvider>
  );
};

export default registerRootComponent(App);
