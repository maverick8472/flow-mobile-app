import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Card from '../../components/ui/Card';
import {ScrollView} from 'react-native-gesture-handler';
import {
  LineChart,
  ContributionGraph,
  ProgressChart,
} from 'react-native-chart-kit';

import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Swim'], // optional
  data: [0.87],
};

const data2 = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul ',
    'Aug ',
    'Sep ',
    'Nov ',
    'Dec',
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 25, 68, 35, 59],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ['Rainy Days'], // optional
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

const commitsData = [
  {date: '2017-01-02', count: 1},
  {date: '2017-01-03', count: 2},
  {date: '2017-01-04', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-01-06', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 3},
  {date: '2017-03-01', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-03-05', count: 2},
  {date: '2017-02-30', count: 4},
  {date: '2017-03-15', count: 2},
  {date: '2017-06-03', count: 1},
  {date: '2017-01-25', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-03-17', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 3},
  {date: '2017-04-21', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-02-30', count: 2},
  {date: '2017-04-07', count: 4},
  ,
];

const UserHabit = props => {
  const [value, setValue] = useState(68);

  return (
    <ScrollView>
      <Card style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.labelInput}>Learn English</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.labelInput}>Mental/Emotional</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.label}>Created:</Text>
          <Text style={styles.labelInput}>2020/04/01</Text>
        </View>
      </Card>
      <Card style={styles.containerFixed}>
        <View style={styles.progressBarContainer}>
          <Text style={styles.label}>Habit Strength</Text>
          <AnimatedCircularProgress
            style={styles.progressBar}
            size={320}
            width={30}
            fill={value}
            tintColor="#5666F3"
            backgroundColor="#959FF7"
            rotation="-90"
            arcSweepAngle="180">
            {fill => <Text style={styles.progressNumber}>{value}%</Text>}
          </AnimatedCircularProgress>
        </View>
      </Card>
      {/* <Card style={styles.container}>
        <View style={styles.charts}>
          <ProgressChart
            style={styles.progressChart}
            data={data}
            width={screenWidth - 40}
            // width={250}
            height={250}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={true}
          />
        </View>
      </Card> */}
      <Card style={styles.container}>
        <View style={styles.chartHeader}>
          <Text style={styles.label}>Habit Progress</Text>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>Week</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>Month</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>Year</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <LineChart
          style={styles.chart}
          data={data2}
          width={screenWidth - 30}
          height={220}
          chartConfig={chartConfig}
          yLabelsOffset={15}
        />
      </Card>
      <Card style={styles.container}>
        <View style={styles.chartHeader}>
          <Text style={styles.label}>Strength Progress</Text>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>Week</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>Month</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>Year</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ContributionGraph
          values={commitsData}
          endDate={new Date('2017-04-01')}
          numDays={110}
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
    margin: 10,
    flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  containerFixed: {
    margin: 10,
    height: 250,
  },
  progressBarContainer: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    paddingBottom: 150,
  },
  progressNumber: {
    color: '#5666F3',
    paddingBottom: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  chart: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  label: {
    paddingVertical: 10,
    fontSize: 20,
    color: '#807F8A',
  },
  labelInput: {
    paddingVertical: 10,
    fontSize: 20,
    color: '#5666F3',
  },
  buttons: {
    paddingTop: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 1,
    borderColor: 'pink',
  },
  button: {
    margin: 5,
    backgroundColor: '#5666F3',
    width: 60,
    height: 30,
    borderRadius: 25,
    // paddingVertical: 10,
    borderColor: '#5666F3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default UserHabit;
