//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Header = ({goBack = () => {}, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 42,
        backgroundColor: 'black',
      }}>
      <TouchableOpacity onPress={goBack}>
        <Text style={{color: 'white'}}>Go Back</Text>
      </TouchableOpacity>
      <Text style={{color: 'white'}}>{text}</Text>
    </View>
  );
};

export default Header;
