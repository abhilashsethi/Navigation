import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {About, Explore, Home, Profile, Setting} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={navigationStrings.HOME}>
          <Stack.Screen
            // screenOptions={{presentation: 'modal'}
            name={navigationStrings.HOME}
            component={Home}
          />
          <Stack.Screen
            options={{title: 'My Profile', headerShown: false}}
            name={navigationStrings.PROFILE}
            component={Profile}
          />
          <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={{tintColor: focused ? 'red' : 'gray'}}
                    source={imagePath.icProfile}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={{tintColor: focused ? 'red' : 'gray'}}
                    source={imagePath.icExplore}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
  );
}
export default Routes;
