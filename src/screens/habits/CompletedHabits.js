import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Switch,
  TextInput,
  FlatList,
} from 'react-native';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioButtons from '../../components/ui/RadioButtons2';

// const CompletedHabits = props => {
//   return (
//     <View style={styles.container}>
//       <Text>Completed Habits</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
// });

// export default CompletedHabits;

const PROP = [
  {
    key: 'samsung',
    text: 'Samsung',
  },
  {
    key: 'apple',
    text: 'Apple',
  },
  {
    key: 'motorola',
    text: 'Motorola',
  },
  {
    key: 'lenovo',
    text: 'Lenovo',
  },
];
const counter = Array.from(Array(100).keys());
const weekDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
const CompletedHabits = props => {
  return (
    <Card style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Name your habit</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.categoryInputLabel}>
          <MaterialIcons
            style={styles.labelIcon}
            name={'grid-large'}
            size={25}
          />
          <Text>Pick a categroy of habit</Text>
        </View>
        <RadioButtons PROP={PROP} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.repetitionInputLabel}>
          <MaterialIcons
            style={styles.labelIcon}
            name={'calendar-month'}
            size={25}
          />
          <Text>Habit Repetition</Text>
        </View>
        {/* <Text>WEEK LIST</Text> */}
        <View style={styles.weekList}>
          <FlatList
            data={weekDays}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item}) => <Text style={styles.days}>{item}</Text>}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.groupLabel}>
          <View style={styles.inputLabel}>
            <MaterialIcons
              style={styles.labelIcon}
              name={'calendar-today'}
              size={25}
            />
            <Text>Check-in A Day?</Text>
          </View>
          <Switch trackColor={{false: '#767577', true: '#81b0ff'}} />
        </View>

        {/* <Text>NUMBERS LIST</Text> */}
        <View style={styles.weekDays}>
          <FlatList
            data={counter}
            horizontal={true}
            renderItem={({item}) => <Text style={styles.number}>{item}</Text>}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.groupLabel}>
          <View style={styles.inputLabel}>
            <MaterialIcons
              style={styles.labelIcon}
              name={'bell-outline'}
              size={25}
            />
            <Text>Set Reminder</Text>
          </View>
          <Text style={{fontSize: 18}}>18:00</Text>
          <Switch trackColor={{false: '#767577', true: '#81b0ff'}} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button text={'Add Habit'} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    height: '96%',
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    paddingVertical: 10,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  categories: {
    paddingVertical: 10,
  },
  inputLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelIcon: {
    paddingRight: 5,
  },
  categoryInputLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 2,
  },
  repetitionInputLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 2,
  },
  groupLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
  },
  numbersList: {
    paddingHorizontal: 2,
  },
  number: {
    padding: 5,
    fontSize: 20,
    marginVertical: 2,
  },
  weekDays: {
    paddingHorizontal: 2,
  },
  days: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});

export default CompletedHabits;
