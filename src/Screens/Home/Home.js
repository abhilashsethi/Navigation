//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../../Components/Header';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

const Home = ({navigation}) => {
  // const navigation = useNavigation();

  console.log('Props Avl', navigation);

  const goToScreen = () => {
    navigation.navigate(navigationStrings.PROFILE, {name: 'Abhilash'});
    // navigation.push(navigationStrings.PROFILE, {name: 'Abhilash'});
    // navigation.replace(navigationStrings.PROFILE, {name: 'Abhilash'});
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Home</Text>
      <Button title="Go To Profile" onPress={goToScreen} />
    </View>
  );
};

export default Home;
