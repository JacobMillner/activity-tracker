import React, { useState } from 'react';
import {
  AccessibilityRole,
  ImageProps,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  Text as RNText,
} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark } from '@eva-design/eva';

const themes = {
  light: {
    theme: light,
    icon: 'sun',
    text: 'LIGHT',
  },
  dark: {
    theme: dark,
    icon: 'moon',
    text: 'DARK',
  },
};

const App = (): React.ReactFragment => {
  const [themeName, setThemeName] = useState('dark');
  const theme: any = themes[themeName].theme;

  const changeTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  const { text: themeButtonText, icon: themeButtonIcon } =
    themeName === 'light' ? themes.dark : themes.light;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        
      </ApplicationProvider>
    </>
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
