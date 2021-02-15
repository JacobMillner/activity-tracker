import React from 'react';
import { Button, View, Text } from 'react-native';

interface SettingsProps {
  navigation: any;
}

const SettingsScreen = ({ navigation }: SettingsProps) => {
  const navBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Back" onPress={navBack} />
    </View>
  );
};

export default SettingsScreen;