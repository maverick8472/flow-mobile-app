import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
} from 'react-native';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryButtons from '../../components/ui/Selectors/RadioButtons/CategoryButtons';
import CATEGORIES from '../../state/data/categories';
import CheckList from '../../components/ui/Selectors/Checkers/CheckList';
import CheckInButtons from '../../components/ui/Selectors/RadioButtons/CheckInButtons';

import TimePicker from '@react-native-community/datetimepicker';

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

const counter = Array.from(Array(30).keys());
const weekDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
const CompletedHabits = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  // const [name, setName] = useState()

  return (
    // <KeyboardAvoidingView
    //   style={styles.keyboardContainer}>
    <ScrollView>
      <Card style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Name your habit</Text>
          <TextInput
            style={styles.input}
            // onChangeText={name => setName(name)}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.listInputLabel}>
            <MaterialIcons
              style={styles.labelIcon}
              name={'grid-large'}
              size={25}
            />
            <Text>Pick a categroy of habit</Text>
          </View>
          <CategoryButtons categories={CATEGORIES} />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.listInputLabel}>
            <MaterialIcons
              style={styles.labelIcon}
              name={'calendar-month'}
              size={25}
            />
            <Text>Habit Repetition</Text>
          </View>
          {/* <Text>WEEK LIST</Text> */}
          <View style={styles.weekList}>
            <CheckList list={weekDays} />
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
            <CheckInButtons checkIns={counter} />
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
            {/* <Text style={{fontSize: 18}}>18:00</Text> */}
            <Button
              // text={currentTime()}
              // onPress={() => setModalOpen(!modalOpen)}
              text={`${date.getHours()} : ${date.getMinutes()}`}
              onPress={showTimepicker}
            />
            <Switch trackColor={{false: '#767577', true: '#81b0ff'}} />
          </View>
        </View>

        <View style={styles.pickerContainer}>
          {show && (
            <TimePicker
              testID="dateTimePicker"
              value={date}
              mode={'time'}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Button text={'Add Habit'} />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    // height: '96%',
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    paddingVertical: 15,
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
  listInputLabel: {
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
    paddingBottom: 10,
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
