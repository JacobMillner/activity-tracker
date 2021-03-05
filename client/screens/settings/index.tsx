import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { Input, Select, SelectItem, IndexPath } from '@ui-kitten/components';

interface SettingsProps {
  navigation: any;
}

const SettingsScreen = ({ navigation }: SettingsProps) => {
  const navBack = () => navigation.goBack();
  const [username, setUserName] = useState<string>();
  const [selectedTheme, setSelectedTheme] = React.useState<
    IndexPath | IndexPath[]
  >();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Back" onPress={navBack} />
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
    </View>
  );
};

export default SettingsScreen;
