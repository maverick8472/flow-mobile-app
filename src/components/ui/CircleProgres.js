import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, StyleSheet, Dimensions, Easing} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Circle} from 'react-native-svg';
import Animated from 'react-native-reanimated';
const {interpolate, multiply} = Animated;

const INITIAL_OFFSET = 25;
const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: '15.91549430918954',
  // percentage: '75',
};

// const {width} = Dimensions.get('window');
// const size = width - 50;
// const strokeWidth = 50;
// const {PI} = Math;
// const r = (size - strokeWidth) / 2;
// const x = size / 2;
// const y = size / 2;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleProgresBar = ({props, percentage}) => {
  const [progressBar, setProgressBar] = useState(0);
  const dashArray = circleConfig.radio * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  // const [animation, setAnimation] = useState(new Animated.Value(0));
  const animation = new Animated.Value(1);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: percentage,
      // duration: 10 * 1000,
      duration: 10 * 500,
      // duration: 500,
      easing: Easing.linear,
    }).start();
    // console.log(animation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  // const α = interpolate(animation, {
  //   inputRange: [0, 1],
  //   outputRange: [0, Math.PI * 2],
  // });

  // const strokeDashoffset = multiply(α, circleConfig.radio);
  console.log(animation);
  // const updatePercentage = useCallback(() => {
  //   setTimeout(() => {
  //     setProgressBar(progressBar + 1);
  //   }, 30);
  //   // setProgressBar(0);
  // }, [progressBar]);

  //   useEffect(() => {
  //     if (percentage > 0) {
  //       updatePercentage();
  //     }
  //   }, [percentage]);

  // useEffect(() => {
  //   if (percentage > 0) {
  //     setProgressBar(0);
  //   }
  // }, [percentage]);

  // useEffect(() => {
  //   if (progressBar < percentage) {
  //     updatePercentage();
  //   }
  // }, [progressBar, percentage, updatePercentage]);

  //   useEffect(() => {
  //     if (percentage > 0) {updatePercentage()}
  //     else if(progressBar < percentage) {updatePercentage())
  //   })

  return (
    <Svg style={styles.container} viewBox={circleConfig.viewBox}>
      {/* <Circle
        className="ring"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke="gray"
      /> */}

      {/* <Circle
        className="path"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke="url(#grad)"
        // strokeDasharray="75 25"
        strokeWidth={2}
        strokeDasharray={`${progressBar} ${100 - progressBar}`}
        strokeDashoffset={INITIAL_OFFSET}
      /> */}

      <AnimatedCircle
        className="path"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke="url(#grad)"
        // strokeDasharray="75 25"
        strokeWidth={2}
        // strokeDasharray={50}
        // strokeDashoffset={100 - animation}
        strokeDasharray={dashArray}
        strokeDashoffset={animation}
      />

      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#54B7B7" />
          <Stop offset="1" stopColor="#90F2F0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CircleProgresBar;
