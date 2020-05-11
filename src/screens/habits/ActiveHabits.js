import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ActiveHabit from '../../components/habit/ActiveHabit';

const ActiveHabits = props => {
  const habits = [
    {
      id: '1',
      name: 'Meditation',
      color: '#FFB428',
      weekDays: ['2020-05-04', '2020-05-06', '2020-05-08'],
    },
    {
      id: '2',
      name: 'Reading',
      color: '#50D890',
      weekDays: ['2020-05-05', '2020-05-04', '2020-05-10'],
    },
    {
      id: '3',
      name: 'English',
      color: '#5666F3',
      weekDays: ['2020-05-04', '2020-05-07', '2020-05-9'],
    },
    {
      id: '4',
      name: 'Sport',
      color: '#FF6B7A',
      weekDays: ['2020-05-05', '2020-05-07', '2020-05-9'],
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Text>Active Habits</Text> */}
      <FlatList
        style={styles.categories}
        data={habits}
        renderItem={({item}) => <ActiveHabit habit={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});

export default ActiveHabits;
