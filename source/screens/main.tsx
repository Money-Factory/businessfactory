import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { observer } from 'mobx-react';

const Main: React.FC = observer(() => (
  <View flex bg-bgColor>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View padding-s4>
        <Text textColor center>
          localized with i18n-js
        </Text>
      </View>
    </ScrollView>
  </View>
));

export default Main;
