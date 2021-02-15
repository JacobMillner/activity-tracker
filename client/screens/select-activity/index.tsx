import React from 'react';
import { Button, View, Text } from 'react-native';

interface SelectActivityProps {
  navigation: any;
}

const SelectActivityScreen = ({ navigation }: SelectActivityProps) => {
  const navBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Select Activity Screen</Text>
      <Button title="Back" onPress={navBack} />
    </View>
  );
};

export default SelectActivityScreen;
