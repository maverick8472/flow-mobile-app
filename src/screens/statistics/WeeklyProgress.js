import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CATEGORIES from '../../state/data/categories';
import CategoryListItem from '../../components/ui/CategoryListItem';
import CategoryPieChart from '../../components/ui/CategoryPieChart';
import Card from '../../components/ui/Card';
import StackedChart from '../../components/ui/StackedAreaChart';
import SingleAreaChart from '../../components/ui/AreaChart';

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
const values = [15, 60, 35, 45, 55, 40, 28, 60, 70];
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

// const userHsbits = [
//   {category: 'Health', color: '#50D25D', values: []}
// ]

const WeeklyProgess = props => {
  const [isCategory, setCategory] = useState();

  const selectCategory = category => {
    setCategory(category);
  };

  return (
    <View>
      <Card style={styles.container}>
        {/* <Text>WeeklyProgess</Text> */}
        <View style={styles.categoriesList}>
          <FlatList
            style={styles.categories}
            data={CATEGORIES}
            renderItem={({item}) => (
              <CategoryListItem
                text={item.name}
                color={item.color}
                // category={setCategory}
                activate={selectCategory}
              />
            )}
          />
        </View>
        <View style={styles.categoryProgress}>
          <CategoryPieChart
            keys={keys}
            values={values}
            colors={colors}
            activate={selectCategory}
            category={isCategory}
          />
        </View>
      </Card>
      {/* <Card style={styles.container}>
        <View>
          <StackedChart />
        </View>
      </Card> */}
      <Card style={styles.categoryChart}>
        <SingleAreaChart data={values} />
      </Card>
    </View>
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
  categoryChart: {
    margin: 10,
    padding: 10,
  },
});

export default WeeklyProgess;
