import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import Card from '../ui/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HabitButton from '../ui/HabitButton';

// id: '1',
// name: 'Meditaion',
// weekDays: ['2020-05-04', '2020-05-06', '2020-05-08'],

const ActiveHabit = props => {
  let curr = new Date();
  let week = [];

  for (let i = 0; i <= 6; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    // let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    let day = new Date(curr.setDate(first));
    // week.push(day);
    const weekDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    week.push({weekDay: weekDays[i], day: day.getDate() + 1});
  }

  //   console.log(week);
  return (
    <Card style={styles.activeHabit}>
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.habitName}>{props.habit.name}</Text>
          <MaterialIcons name="bell-outline" size={30} />
        </View>
        <View style={styles.weekDays}>
          <FlatList
            style={{}}
            data={week}
            horizontal={true}
            renderItem={({item}) => (
              <View style={styles.weekContainer}>
                <Text style={styles.weekDay}>{item.weekDay}</Text>
                <Text
                  style={{...styles.day, backgroundColor: props.habit.color}}>
                  {item.day}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  activeHabit: {
    margin: 10,
  },
  container: {},
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  habitName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekDays: {
    flexDirection: 'row',
  },
  weekContainer: {
    paddingVertical: 10,
    marginHorizontal: 10,
    paddingLeft: 5,
  },
  weekDay: {
    paddingBottom: 2,
    paddingLeft: 3,
  },
  day: {
    // color: 'gray',
    textAlign: 'center',
    justifyContent: 'space-between',
    fontSize: 20,
    // fontWeight: 'bold',
    height: 30,
    width: 30,
    borderRadius: 30,
  },
});

export default ActiveHabit;
