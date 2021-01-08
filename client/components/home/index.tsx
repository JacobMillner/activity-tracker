import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageStyle,
  View,
  Text as RNText,
} from 'react-native';
import { Button, Layout, Icon, Text } from '@ui-kitten/components';

const heartIcons = ['😻', '💖', '😍', '🥰', '😍', '💝', '😘', '💓', '💕', '🐱'];

type IconProps = {
  name: string;
  style?: ImageStyle;
};

const renderIcon = ({ name, style }: IconProps) => (
  <Icon {...style} name={name} />
);

const home = (): React.ReactFragment => {
  const [icon, setIcon] = useState(heartIcons[0]);

  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome to Activity Tracker {icon}
      </Text>
      <Text style={styles.text} category="s1">
        It works great in the browser and as a native app!
      </Text>
      <Text style={styles.text} appearance="hint">
        Click some buttons to see it working.
      </Text>
      <Button
        accessibilityRole="button"
        accessibilityLabel="Change Icon"
        style={styles.iconButton}
        onPress={changeIcon}>
        CHANGE ICON
      </Button>
      <CustomButtonWithIcon
        accessibilityRole="button"
        accessibilityLabel="UI Kitten Change Theme"
        style={styles.iconButton}
        text={`SWITCH TO ${themeButtonText} THEME`}
        icon={themeButtonIcon}
        onPress={changeTheme}
        iconStyle={{ tintColor: 'white' }}
      />
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Native Change Theme"
        onPress={changeTheme}>
        <View style={styles.nativeButton}>
          <RNText>NATIVE CHANGE THEME</RNText>
        </View>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  iconButton: {
    marginVertical: 16,
  },
  nativeButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default App;
