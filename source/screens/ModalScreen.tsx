import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';

export default function ModalScreen() {
  return (
    <View center flex>
      <Text bold text20>
        This is a modal.
      </Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
