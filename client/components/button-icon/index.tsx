import React from 'react';
import { AccessibilityRole, ImageStyle, Text as RNText } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';

type ButtonIconProps = {
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
  icon: string;
  iconStyle?: ImageStyle;
  onPress: () => void;
  text: string;
  style: any;
};

type IconProps = {
  name: string;
  style?: ImageStyle;
};

const renderIcon = ({ name, style }: IconProps) => (
  <Icon {...style} name={name} />
);

const ButtonIcon = ({
  accessibilityRole,
  accessibilityLabel,
  icon,
  iconStyle,
  onPress,
  text,
  style,
}: ButtonIconProps) => {
  const ButtonIcon = () => renderIcon({ name: icon, style: iconStyle });
  return (
    <Button
      style={style}
      icon={ButtonIcon}
      onPress={onPress}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}>
      {text}
    </Button>
  );
};

export default ButtonIcon;
