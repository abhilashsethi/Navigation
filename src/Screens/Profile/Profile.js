//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import Header from '../../Components/Header';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

// create a component
const Profile = ({navigation, route}) => {
  const {name} = route.params;
  console.log('My Props', name);

  const goToScreen = () => {
    navigation.navigate(navigationStrings.EXPLORE, {name: 'Abhi'});
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          //  goBack={() => navigation.goBack()}
          goBack={() => navigation.goBack()}
          text="Profile Screen"
        />
        <Text style={{color: 'white'}}>Profile</Text>
        <Text style={{color: 'white'}}>This is params data -: {name}</Text>
        <Button title="Go To Explore" onPress={goToScreen} />
        <View style={{marginTop: 24}}>
          <Button title="Go To Back" onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
