import React from 'react';
import { Button, View, Text } from 'react-native';

interface StatsProps {
  navigation: any;
}

const StatsScreen = ({ navigation }: StatsProps) => {
  const navBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Stats Screen</Text>
      <Button title="Back" onPress={navBack} />
    </View>
  );
};

export default StatsScreen;
