import React from 'react';
import { Button, View, Text } from 'react-native';

interface AddActivityProps {
  navigation: any;
}

const AddActivityScreen = ({ navigation }: AddActivityProps) => {
  const navBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Activity Screen</Text>
      <Button title="Back" onPress={navBack} />
    </View>
  );
};

export default AddActivityScreen;
