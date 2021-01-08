import React from 'react';

type CustomButtonWithIconProps = {
  accessibilityRole: AccessibilityRole;
  accessibilityLabel: string;
  icon: string;
  iconStyle?: ImageStyle;
  onPress: () => void;
  text: string;
  style: any;
};

const CustomButtonWithIcon = ({
  accessibilityRole,
  accessibilityLabel,
  icon,
  iconStyle,
  onPress,
  text,
  style,
}: CustomButtonWithIconProps) => {
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
