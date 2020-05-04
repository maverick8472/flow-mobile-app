// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';

// const Calendar = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Calendar</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
// });

// export default Calendar;

import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Circle} from 'react-native-svg';
import Animated, {Easing} from 'react-native-reanimated';

const {interpolate, multiply} = Animated;
const {width} = Dimensions.get('window');
const size = width - 50;
const strokeWidth = 50;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const {PI} = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;

const Calendar = () => {
  const progress = new Animated.Value();

  useEffect(() => {
    Animated.timing(progress, {
      duration: 10 * 1000,
      toValue: 1,
      easing: Easing.linear,
    }).start();
  }, [progress]);

  const circumference = 2 * Math.PI * r;

  const α = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI * 2],
  });

  const strokeDashoffset = multiply(α, r);
  return (
    <Svg width={size} height={size} style={styles.container}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#f7cd46" />
          <Stop offset="1" stopColor="#ef9837" />
        </LinearGradient>
      </Defs>

      <Circle
        // stroke="rgba(255, 255, 255, 0.2)"
        stroke="url(#grad)"
        fill="none"
        {...{
          strokeWidth,
          cx,
          cy,
          r,
        }}
      />
      <AnimatedCircle
        // stroke="url(#grad)"
        stroke="rgba(255, 255, 255, 0.2)"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{
          strokeDashoffset,
          strokeWidth,
          cx,
          cy,
          r,
        }}
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{rotateZ: '270deg'}],
    // rotation: '90deg',
  },
});

export default Calendar;
