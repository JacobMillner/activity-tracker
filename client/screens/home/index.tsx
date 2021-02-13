import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Icon, Text } from '@ui-kitten/components';
import ButtonIcon from '../../components/button-icon';

const heartIcons = ['😻', '💖', '😍', '🥰', '😍', '💝', '😘', '💓', '💕', '🐱'];

type HomeProps = {
  themeName: string;
  changeTheme: () => void;
  themes: any;
  navigation: any;
};

const Home = ({ themeName, changeTheme, themes, navigation }: HomeProps) => {
  const [icon, setIcon] = useState(heartIcons[0]);

  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  const navStats = () => navigation.navigate('Stats');

  const { text: themeButtonText, icon: themeButtonIcon } =
    themeName === 'light' ? themes.dark : themes.light;

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome to Activity Tracker {icon}
      </Text>
      <Text style={styles.text} category="s1">
        Track all of your activites!
      </Text>
      <Text style={styles.text} appearance="hint">
        Test buttons!
      </Text>
      <Button
        accessibilityRole="button"
        accessibilityLabel="Change Icon"
        style={styles.iconButton}
        onPress={changeIcon}>
        CHANGE ICON
      </Button>
      <ButtonIcon
        accessibilityRole="button"
        accessibilityLabel="Change Theme"
        style={styles.iconButton}
        text={`SWITCH TO ${themeButtonText} THEME`}
        icon={themeButtonIcon}
        onPress={changeTheme}
        iconStyle={{ tintColor: 'white' }}
      />
      <ButtonIcon
        accessibilityRole="button"
        accessibilityLabel="UI Kitten Change Theme"
        style={styles.iconButton}
        text={'Stats Screen'}
        icon={themeButtonIcon}
        onPress={navStats}
        iconStyle={{ tintColor: 'white' }}
      />
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

export default Home;
