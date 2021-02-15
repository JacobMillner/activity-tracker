import React from 'react';
import { Button, View, Text } from 'react-native';

interface SetupProps {
  navigation: any;
}

const SetupScreen = ({ navigation }: SetupProps) => {
  const navBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setup Screen</Text>
      <Button title="Back" onPress={navBack} />
    </View>
  );
};

export default SetupScreen;
