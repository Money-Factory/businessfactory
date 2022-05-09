import Button from 'react-native-ui-lib/button';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';

import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<'NotFound'>) {
  return (
    <View center flex padding-20>
      <Text bold text20>
        This screen doesn&apos;t exist.
      </Text>
      <Button
        label="Go do the home screen"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  );
}
