//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>App</Text> */}
      <Routes />
    </View>
  );
};

export default App;
