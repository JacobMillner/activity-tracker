import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark } from '@eva-design/eva';
import Home from './screens/home';
import AddActivity from './screens/add-activity';
import StatsScreen from './screens/stats';
import SelectActivityScreen from './screens/select-activity';
import SettingsScreen from './screens/settings';
import SetupScreen from './screens/setup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddActivityScreen from './screens/add-activity';

const themes: any = {
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
  const Stack = createStackNavigator();

  const changeTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <Stack.Navigator>
            <Stack.Screen name="Home">
              {(props) => (
                <Home
                  {...props}
                  themeName={themeName}
                  changeTheme={changeTheme}
                  themes={themes}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Stats" component={StatsScreen} />
            <Stack.Screen name="AddActivity" component={AddActivityScreen} />
            <Stack.Screen
              name="SelectActivity"
              component={SelectActivityScreen}
            />
            <Stack.Screen name="Setup" component={SetupScreen} />
            <Stack.Screen name="Stats" component={StatsScreen} />
          </Stack.Navigator>
        </ApplicationProvider>
      </NavigationContainer>
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
