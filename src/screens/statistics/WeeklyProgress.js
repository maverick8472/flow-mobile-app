import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CATEGORIES from '../../state/data/categories';
import CategoryListItem from '../../components/ui/CategoryListItem';
import CategoryPieChart from '../../components/ui/CategoryPieChart';
import Card from '../../components/ui/Card';
import StackedChart from '../../components/ui/StackedAreaChart';
import SingleAreaChart from '../../components/ui/AreaChart';

import {StackedBarChart} from 'react-native-chart-kit';

import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width;

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

const data = {
  labels: ['Health', 'Relationships'],
  // legend: ['L1', 'L2', 'L3'],
  data: [[60, 60, 60], [30, 30, 60], [45, 28, 32], [32, 26, 41], [57, 85, 34]],
  barColors: ['#50D25D', '#F05B2C', '#F02CAD'],
};
const chartConfig = {
  // backgroundGradientFrom: '#1E2923',
  // backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: '#08130D',
  // backgroundGradientToOpacity: 0.5,
  // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  color: (opacity = 1) => `rgba(86, 102, 243, ${opacity})`,
  // color: 'pink',
  backgroundColor: 'white',
  backgroundGradientFrom: 'white',
  backgroundGradientTo: 'white',
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const WeeklyProgess = props => {
  const [isCategory, setCategory] = useState();

  const selectCategory = category => {
    setCategory(category);
  };

  return (
    <ScrollView>
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

      <Card style={styles.categoryChart}>
        <StackedBarChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </Card>
    </ScrollView>
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
