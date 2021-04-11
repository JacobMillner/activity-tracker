import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import ButtonIcon from '../../components/button-icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SaveData } from '../../types/save-data';

const heartIcons = ['😻', '💖', '😍', '🥰', '😍', '💝', '😘', '💓', '💕', '🐱'];

type HomeProps = {
  themeName: string;
  changeTheme: () => void;
  themes: any;
  navigation: any;
};

const Home = ({ themeName, changeTheme, themes, navigation }: HomeProps) => {
  const [icon, setIcon] = useState(heartIcons[0]);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    // on load grab user settings
    getSaveData();
  }, []);

  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  const navStats = () => navigation.navigate('Stats');
  const navAddActivity = () => navigation.navigate('AddActivity');
  const navSelectActivity = () => navigation.navigate('SelectActivity');
  const navSettings = () => navigation.navigate('Settings');

  const getSaveData = async () => {
    // TODO: move this to context
    try {
      const jsonData: string | null = await AsyncStorage.getItem('save-data');
      if (jsonData !== null) {
        const data: SaveData = JSON.parse(jsonData);
        setUserName(data.user.username);
      }
    } catch (e) {
      console.error('Error loading save data. ', e);
    }
  };

  const { text: themeButtonText, icon: themeButtonIcon } =
    themeName === 'light' ? themes.dark : themes.light;

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome to Activity Tracker {userName}! {icon}
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
        accessibilityLabel="Stats Screen"
        style={styles.iconButton}
        text={'Stats Screen'}
        icon={themeButtonIcon}
        onPress={navStats}
        iconStyle={{ tintColor: 'white' }}
      />
      <ButtonIcon
        accessibilityRole="button"
        accessibilityLabel="Add Activity"
        style={styles.iconButton}
        text={'Add Activity'}
        icon={themeButtonIcon}
        onPress={navAddActivity}
        iconStyle={{ tintColor: 'white' }}
      />
      <ButtonIcon
        accessibilityRole="button"
        accessibilityLabel="Select Activity"
        style={styles.iconButton}
        text={'Select Activity'}
        icon={themeButtonIcon}
        onPress={navSelectActivity}
        iconStyle={{ tintColor: 'white' }}
      />
      <ButtonIcon
        accessibilityRole="button"
        accessibilityLabel="Settings"
        style={styles.iconButton}
        text={'Settings'}
        icon={themeButtonIcon}
        onPress={navSettings}
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
