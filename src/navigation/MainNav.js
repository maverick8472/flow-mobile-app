import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home/Home';
import UsersHabits from '../screens/habits/CompletedHabits';
import WeeklyProgess from '../screens/statistics/WeeklyProgress';
import Habits from '../screens/resources/Habits';
import HomeNav from './homeNav/HomeStackNav';
import HabitsNav from './habitsNav/HabitsTopNav';

const Main = createBottomTabNavigator();

export default function MainNav() {
  return (
    <Main.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Habits') {
            iconName = focused ? 'repeat' : 'cached';
          } else if (route.name === 'Statistics') {
            iconName = focused ? 'chart-bar-stacked' : 'chart-bar';
          } else if (route.name === 'Resources') {
            iconName = focused ? 'book-open' : 'book-outline';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      {/* <Main.Screen name="Home" component={HomeStack} /> */}
      {/* <Main.Screen name="Habits" component={HabitsStack} />
      <Main.Screen name="Statistics" component={Statistics} />
      <Main.Screen name="Resources" component={ReasourcesStack} /> */}
      {/* <Main.Screen name="Home" component={Home} /> */}
      <Main.Screen name="Home" component={HomeNav} />
      <Main.Screen name="Habits" component={HabitsNav} />
      <Main.Screen name="Statistics" component={WeeklyProgess} />
      <Main.Screen name="Resources" component={Habits} />
    </Main.Navigator>
  );
}
