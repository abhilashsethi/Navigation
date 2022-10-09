import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

// create a component
const Explore = ({navigation, route}) => {
  const {name} = route.params;
  const goToScreen = () => {
    navigation.navigate(navigationStrings.HOME, {name: 'Abhi'});
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Explore</Text>
      <Text style={{color: 'white'}}>{name}</Text>
      <Button title="Go To Home" onPress={goToScreen} />
    </View>
  );
};

export default Explore;
