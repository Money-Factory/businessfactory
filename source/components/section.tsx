import React from 'react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

type SectionProps = {
  children: React.ReactNode;
  title: string;
};

const Section: React.FC<SectionProps> = ({ children, title }: SectionProps) => (
  <View paddingV-s1>
    <View row>
      <Text textColor section>
        {title}
      </Text>
    </View>

    <View paddingH-s2 paddingV-s2>
      <View br40>{children}</View>
    </View>
  </View>
);

export default Section;
