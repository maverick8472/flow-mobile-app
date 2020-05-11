import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';
import Habits from '../../screens/resources/Habits';
import HabitDetails from '../../screens/resources/HabitDetails';

const Stack = createStackNavigator();
export default function ResourcesNav({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Habits">
      <Stack.Screen
        name="Habits"
        options={{
          header: () => null,
        }}
        component={Habits}
      />
      <Stack.Screen
        name="HabitDetails"
        options={{
          header: () => null,
        }}
        component={HabitDetails}
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
