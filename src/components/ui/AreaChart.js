import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AreaChart, Grid} from 'react-native-svg-charts';
import {Defs, LinearGradient, Stop} from 'react-native-svg';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
const SingleAreaChart = props => {
  const Gradient = ({index}) => (
    <Defs key={index}>
      <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
        <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.8} />
        <Stop
          offset={'100%'}
          stopColor={'rgb(134, 65, 244)'}
          stopOpacity={0.2}
        />
      </LinearGradient>
    </Defs>
  );
  return (
    <AreaChart
      style={{height: 200}}
      //   data={props.data}
      data={data}
      contentInset={{top: 20, bottom: 20}}
      svg={{fill: 'url(#gradient)'}}>
      <Grid />
      <Gradient />
    </AreaChart>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default SingleAreaChart;
