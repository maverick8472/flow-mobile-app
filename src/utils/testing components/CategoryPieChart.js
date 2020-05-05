// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {PieChart} from 'react-native-svg-charts';

// const CategoryPieChart = () => {
//   // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
//   const data = [50, 30, 40, 5, 20];

//   const randomColor = () =>
//     ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
//       0,
//       7,
//     );
//   const pieData = data
//     .filter(value => value > 0)
//     .map((value, index) => ({
//       value,
//       svg: {
//         fill: randomColor(),
//         onPress: () => console.log('press', index),
//       },
//       key: `pie-${index}`,
//     }));
//   return <PieChart style={styles.pieChart} data={pieData} />;
// };

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

import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

class PieChartWithDynamicSlices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0,
      },
      labelWidth: 0,
    };
  }
  render() {
    const {labelWidth, selectedSlice} = this.state;
    const {label, value} = selectedSlice;
    const keys = [
      'google',
      'facebook',
      'linkedin',
      'youtube',
      'Twitter',
      'Tik-Tok',
    ];
    const values = [15, 25, 35, 45, 55, 40];
    const colors = [
      '#600080',
      '#9900cc',
      '#c61aff',
      '#d966ff',
      '#ecb3ff',
      'pink',
    ];
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
        onPress: () =>
          this.setState({selectedSlice: {label: key, value: values[index]}}),
      };
    });
    const deviceWidth = Dimensions.get('window').width;

    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <PieChart
          style={{height: 300}}
          // outerRadius={'80%'}
          // innerRadius={'60%'}
          data={data}
        />
      </View>
    );
  }
}

export default PieChartWithDynamicSlices;

// const styles = StyleSheet.create({
//   pieChart: {
//     height: 200,
//   },
// });
// export default CategoryPieChart;
