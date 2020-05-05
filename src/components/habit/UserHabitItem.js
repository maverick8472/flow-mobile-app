import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Card from '../ui/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HabitButton from '../ui/HabitButton';

const UserHabitItem = props => {
  return (
    <Card style={styles.userHabit}>
      <View style={styles.touchable}>
        <TouchableNativeFeedback onPress={props.onSelect} useForeground>
          <View style={styles.container}>
            <View style={styles.leftIcons}>
              {/* <Text>Details feature-search-outline</Text>
              <Text>Stats chart-bar</Text> */}
              <MaterialIcons name="feature-search-outline" size={30} />
              <MaterialIcons name="chart-bar" size={30} />
            </View>
            <View style={styles.buttonContainer}>
              <HabitButton />
              <Text style={{fontWeight: 'bold'}}>25</Text>
            </View>
            <View style={styles.reightIcons}>
              {/* <Text>Edit pencil</Text>
              <Text>Delete delete</Text> */}
              <MaterialIcons name="pencil" size={30} />
              <MaterialIcons name="delete" size={30} />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  userHabit: {
    // height: 300,
    margin: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  leftIcons: {},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  reightIcons: {},
});

export default UserHabitItem;
