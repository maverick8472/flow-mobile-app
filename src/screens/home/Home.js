import React from 'react';
import {View, Text, StyleSheet, Image, Switch, FlatList} from 'react-native';
import CircleProgresBar from '../../components/ui/CircleProgres';
import CircleButton from '../../components/ui/CircleButton';
import HabitButton from '../../components/ui/HabitButton';
import UserHabitItem from '../../components/habit/UserHabitItem';
import CategoryPieChart from '../../components/ui/CategoryPieChart';
import CATEGORIES from '../../state/data/categories';
import CategoryListItem from '../../components/ui/CategoryListItem';
import Card from '../../components/ui/Card';
import {TextInput} from 'react-native-gesture-handler';
import CategoryItem from '../../components/habit/CategoryItemPick';
import RadioButtons from '../../components/ui/RadioButtons2';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/ui/Button';

const userHabits = [
  {
    id: '1',
    habit: 'Take a walk',
    category: 'Health',
    color: '#50D25D',
    progress: 35,
  },
  {
    id: '2',
    habit: 'Practice Gratitude',
    category: 'Mind/Emo',
    color: '#F05B2C',
    progress: 40,
  },
  {
    id: '3',
    habit: 'Dancing',
    category: 'Fun',
    color: '#F0A22C',
    progress: 60,
  },
  {
    id: '4',
    habit: 'Save money',
    category: 'Money',
    color: '#ECF02C',
    progress: 70,
  },
  {
    id: '5',
    habit: 'I love you',
    category: 'Family',
    color: '#F02C38',
    progress: 30,
  },
  {
    id: '6',
    habit: 'Prayer',
    category: 'Spirituality',
    color: '#2CF0D8',
    progress: 20,
  },
  {
    id: '7',
    habit: 'Networking',
    category: 'Career',
    color: '#2C63F0',
    progress: 50,
  },
  {
    id: '8',
    habit: 'Act of kindness',
    category: 'Relationships',
    color: '#F02CAD',
    progress: 80,
  },
];

const Home = () => {
  // const precentage = 40;
  return (
    // <View style={styles.container}>
    //   {/* <Text>Home</Text> */}
    //   {/* <HabitButton style={styles.habitButton} /> */}
    //   {/* <CircleProgresBar percentage={75} /> */}
    // </View>
    <View style={styles.container}>
      <FlatList
        data={userHabits}
        renderItem={({item}) => <UserHabitItem item={item} />}
      />
    </View>
    // <Text>Home</Text>
  );
};

// const styles = StyleSheet.create({
//   container: {},
//   habitButton: {},
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // padding: ,
  },
  categoriesList: {
    width: '40%',
  },
  categoryProgress: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: '60%',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
