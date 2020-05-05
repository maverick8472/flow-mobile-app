import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CATEGORIES from '../../state/data/categories';
import CategoryListItem from '../../components/ui/CategoriListItem';
import CategoryPieChart from '../../components/ui/CategoryPieChart';
import Card from '../../components/ui/Card';

const keys = [
  'Health',
  'Mind / Emo',
  'Relationships',
  'Family',
  'Fun',
  'Career',
  'Money',
  'Spirituality',
  'Productivity',
];
const values = [15, 25, 35, 45, 55, 40, 28, 60, 72];
const colors = [
  '#50D25D',
  '#F05B2C',
  '#F02CAD',
  '#F02C38',
  '#F0A22C',
  '#2C63F0',
  '#ECF02C',
  '#2CF0D8',
  '#C9D6FF',
];

const WeeklyProgess = props => {
  return (
    <Card style={styles.container}>
      {/* <Text>WeeklyProgess</Text> */}
      <View style={styles.categoriesList}>
        <FlatList
          style={styles.categories}
          data={CATEGORIES}
          renderItem={({item}) => (
            <CategoryListItem text={item.name} color={item.color} />
          )}
        />
      </View>
      <View style={styles.categoryProgress}>
        <CategoryPieChart keys={keys} values={values} colors={colors} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // padding: ,
    margin: 10,
    padding: 10,
  },
  categoriesList: {
    width: '40%',
  },
  categoryProgress: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: '60%',
  },
});

export default WeeklyProgess;
