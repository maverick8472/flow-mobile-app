import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

import Home from '../../screens/home/Home';
import Settings from '../../screens/home/Settings';
import Calendar from '../../screens/home/Calendar';

const Stack = createStackNavigator();
export default function HomeNav({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          headerStyle: {height: 50},
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.leftIconContainer}
                onPress={() => navigation.navigate('Calendar')}>
                <Text>
                  <FontAwesome name="calendar" size={20} style={styles.icon} />
                </Text>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={styles.rightIconContainer}
                onPress={() => navigation.navigate('Settings')}>
                <Text>
                  <FontAwesome name="cog" size={25} style={styles.icon} />
                </Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Home}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        // options={{
        //   header: () => null,
        // }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  leftIconContainer: {
    paddingLeft: 10,
  },
  rightIconContainer: {
    paddingRight: 10,
  },
  icon: {
    color: 'gray',
  },
});
