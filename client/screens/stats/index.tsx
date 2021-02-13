import React from 'react';
import { Button, View, Text } from 'react-native';

const StatsScreen = (navigation: any) => {
  const navHome = () => navigation.navigate('Home');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Stats Screen</Text>
      <Button title="Home" onPress={navHome} />
    </View>
  );
};

export default StatsScreen;
