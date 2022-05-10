import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Button } from 'react-native-ui-lib';
import { Colors } from 'react-native-ui-lib/style';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import { Icon } from './icon';

type ActionProps = {
  title: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  rightIcon?: React.ComponentProps<typeof Ionicons>['name'];
  info?: string;
  onPress?: () => void;
};

const defaultProps: Partial<ActionProps> = {
  icon: 'check' as React.ComponentProps<typeof Ionicons>['name'],
  rightIcon: 'check' as React.ComponentProps<typeof Ionicons>['name'],
  info: '',
  onPress: (): void => {
    /* Do nothing */
  },
};

const Action: React.FC<ActionProps> = ({
  title,
  icon,
  rightIcon,
  info,
  onPress,
}: ActionProps) => {
  const iconSize = 22;

  return (
    <View padding-s4>
      <Button onPress={onPress}>
        <View row centerV style={{ justifyContent: 'space-between' }}>
          <View row centerV>
            {icon ? (
              <View marginR-s2>
                <Icon name={icon} size={iconSize} color={Colors.primary} />
              </View>
            ) : null}

            {title ? (
              <Text textColor text60R>
                {title}
              </Text>
            ) : null}
          </View>

          <View row centerV>
            {info ? (
              <Text textColor text80BL>
                {info}
              </Text>
            ) : null}

            {rightIcon ? (
              <View marginL-s2>
                <Icon name={rightIcon} size={iconSize} color={Colors.primary} />
              </View>
            ) : null}
          </View>
        </View>
      </Button>
    </View>
  );
};

Action.defaultProps = defaultProps;
export default Action;
