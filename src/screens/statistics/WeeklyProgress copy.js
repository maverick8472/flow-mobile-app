import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CategoryListItem from '../../components/ui/CategoryListItem';
import CategoryPieChart from '../../components/ui/CategoryPieChart';
import Card from '../../components/ui/Card';
import SingleAreaChart from '../../components/ui/AreaChart';

const WeeklyProgess = props => {
  return (
    <View>
      <Card style={styles.container}>
        <View style={styles.categoriesList}>
          <FlatList
            style={styles.categories}
            data={props.categories}
            renderItem={({item}) => (
              <CategoryListItem text={item.name} color={item.color} />
            )}
          />
        </View>
        <View style={styles.categoryProgress}>
          <CategoryPieChart
            keys={props.keys}
            values={props.values}
            colors={props.colors}
          />
        </View>
      </Card>
      <Card style={styles.categoryChart}>
        <SingleAreaChart data={props.values} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
  },
  categoriesList: {
    width: '40%',
  },
  categoryProgress: {
    width: '60%',
  },
  categoryChart: {
    margin: 10,
    padding: 10,
  },
});

export default WeeklyProgess;
