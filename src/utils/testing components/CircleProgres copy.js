import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Circle} from 'react-native-svg';

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

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const CircleProgresBar = ({props, percentage}) => {
  const [progressBar, setProgressBar] = useState(0);

  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 500,
    }).start();
  }, [animation, percentage]);

  console.log(animation)
  const updatePercentage = useCallback(() => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
    }, 5);
    // setProgressBar(0);
  }, [progressBar]);

  //   useEffect(() => {
  //     if (percentage > 0) {
  //       updatePercentage();
  //     }
  //   }, [percentage]);

  useEffect(() => {
    if (percentage > 0) {
      setProgressBar(0);
    }
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) {
      updatePercentage();
    }
  }, [progressBar, percentage, updatePercentage]);

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
        strokeDasharray={`${progressBar}, ${100 - progressBar}`}
        strokeDashoffset={INITIAL_OFFSET}
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
