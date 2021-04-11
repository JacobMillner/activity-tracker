import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { Input, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SaveData } from '../../types/save-data';

interface SettingsProps {
  navigation: any;
}

const SettingsScreen = ({ navigation }: SettingsProps) => {
  const navBack = () => navigation.goBack();
  const [username, setUserName] = useState<string>();
  const [selectedTheme, setSelectedTheme] = React.useState<
    IndexPath | IndexPath[]
  >();

  const storeData = async () => {
    try {
      if (username) {
        const data: SaveData = { user: { username } };
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('save-data', jsonValue);
      }
    } catch (e) {
      console.error('Error saving data: ', e);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Input
        placeholder="Name"
        value={username}
        onChangeText={(nextValue) => setUserName(nextValue)}
      />
      <Select
        label="Theme"
        caption="Theme"
        selectedIndex={selectedTheme}
        onSelect={(index) => setSelectedTheme(index)}>
        <SelectItem title="Dark" />
        <SelectItem title="Light" />
      </Select>
      <Button title="Save" onPress={storeData} />
      <Button title="Back" onPress={navBack} />
    </View>
  );
};

export default SettingsScreen;
