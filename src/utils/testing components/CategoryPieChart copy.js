import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

const keys = [
  'google',
  'facebook',
  'linkedin',
  'youtube',
  'Twitter',
  'Tik-Tok',
];
const values = [15, 25, 35, 45, 55, 40];
const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff', 'pink'];

const CategoryPieChart = () => {
  let [label, setLabel] = useState();

  const data = keys.map((key, index) => {
    return {
      key,
      value: values[index],
      svg: {fill: colors[index]},
      arc: {
        // outerRadius: 70 + values[index] + '%',
        padAngle: 0.03,
        outerRadius: label === key ? 105 : 100,
      },
      onPress: () => setLabel((label = key)),
    };
  });

  return (
    <PieChart
      style={styles.pieChart}
      outerRadius={'80%'}
      innerRadius={'60%'}
      data={data}
    />
  );
};

const styles = StyleSheet.create({
  pieChart: {
    height: 215,
    // justifyContent: 'center',
    // flex: 1,
  },
});
export default CategoryPieChart;

// const WeeklyProgess = props => {
//   return (
//     <View style={styles.container}>
//       <Text>Weekly Progess</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
// });
