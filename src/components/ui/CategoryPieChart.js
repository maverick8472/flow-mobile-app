import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

const CategoryPieChart = props => {
  let [label, setLabel] = useState();

  useEffect(() => {
    setLabel(props.category);
  }, [props.category]);

  const data = props.keys.map((key, index) => {
    return {
      key,
      value: props.values[index],
      svg: {fill: props.colors[index]},
      arc: {
        // outerRadius: 70 + values[index] + '%',
        padAngle: 0.03,
        // outerRadius: label === key ? 105 : 100,
        outerRadius: label === key ? 105 : 100,
        // outerRadius: label,
      },
      // onPress: () => setLabel((label = key)),
      // onPress: () => props.activate(key),
      onPress: () => {
        setLabel((label = key));
        props.activate(key);
      },
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
