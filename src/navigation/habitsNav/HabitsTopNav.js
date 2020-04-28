import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActiveHabits from '../../screens/habits/ActiveHabits';
import CompletedHabits from '../../screens/habits/CompletedHabits';

const Tab = createMaterialTopTabNavigator();

export default function HabitsNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Active" component={ActiveHabits} />
      <Tab.Screen name="Completed" component={CompletedHabits} />
    </Tab.Navigator>
  );
}
