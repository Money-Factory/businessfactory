import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Game from './game';

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <View style={styles.safeArea}>
          <Game />
        </View>
      </SafeAreaView>
      <StatusBar style='light'/>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);

const styles = {
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'grey',
  }
} as const;