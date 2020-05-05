import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Card from '../ui/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//   name={item.name}
//   image={item.imageUrl}
//   category={item.category}
//   dificulty={item.dificulty}
//   daysToForm={item.daysToForm}
//   instructions={item.instructions}

const HabitItem = props => {
  return (
    <Card style={styles.habit}>
      <View style={styles.touchable}>
        <TouchableNativeFeedback onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.image}} />
              <Text style={styles.title}>{props.name}</Text>
            </View>
            {/* <View style={styles.details}>
              <Text style={styles.price}>Category: {props.category}</Text>
              <Text style={styles.price}>dificulty: {props.dificulty}</Text>
              <Text style={styles.price}>Days To Form: {props.daysToForm}</Text>
            </View> */}
            <View style={styles.details}>
              <View style={styles.stats}>
                <MaterialIcons name="grid-large" size={20} />
                <Text> {props.category}</Text>
              </View>
              <View style={styles.stats}>
                <MaterialIcons name="chart-line" size={20} />
                <Text> {props.dificulty}</Text>
              </View>
              <View style={styles.stats}>
                <MaterialIcons name="calendar-month-outline" size={20} />
                <Text> {props.daysToForm}</Text>
              </View>
            </View>

            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  habit: {
    height: 300,
    margin: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '15%',
    padding: 10,
  },
  title: {
    color: 'white',
    position: 'absolute',
    fontSize: 25,
    marginVertical: 4,
    top: 10,
    left: 20,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  stats: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default HabitItem;
