import React, { useMemo } from 'react';
import { Colors } from 'react-native-ui-lib';
import View from 'react-native-ui-lib/view';
import { Ionicons } from '@expo/vector-icons';

type IconProps = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
};

const ICON_SIZE = 26;

export const IconComponent = Ionicons;
export const Icon: React.FC<IconProps> = ({
  name,
  size = ICON_SIZE,
  color = Colors.textColor,
}: IconProps) =>
  useMemo(
    () => (
      <View>
        <IconComponent name={name} size={size} color={color} />
      </View>
    ),
    [name, size, color]
  );
