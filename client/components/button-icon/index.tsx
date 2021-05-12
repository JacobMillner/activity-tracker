import React from 'react';
import { AccessibilityRole, ImageStyle, Text as RNText } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';

type ButtonIconProps = {
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
  onPress: () => void;
  text: string;
  style: any;
};

type IconProps = {
  name: string;
  style?: ImageStyle;
};

const ButtonIcon = ({
  accessibilityRole,
  accessibilityLabel,
  onPress,
  text,
  style,
}: ButtonIconProps) => {
  return (
    <Button
      style={style}
      onPress={onPress}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}>
      {text}
    </Button>
  );
};

export default ButtonIcon;
