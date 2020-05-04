import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Animated, {Easing} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const INITIAL_OFFSET = 25;
const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: '15.91549430918954',
  percentage: '75',
};

// setInterval custom hook by Dan Abramov
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const CircleProgressBar2 = ({props, percentage}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);

  // useInterval(() => {
  //   // update progress until 100
  //   if (progress < percentage) {
  //     setProgress(progress + 1);
  //   }
  // }, 0.001);

  // useEffect(() => {
  //   if (percentage > 0) {
  //     setProgress(0);
  //   }
  //   Animated.timing(animation, {
  //     toValue: percentage,
  //     duration: 1,
  //     easing: Easing.back(),
  //   }).start();
  // }, [animation, percentage]);
  const pulse = useCallback(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 1,
      easing: Easing.back(),
    }).start(() => pulse());
  }, [animation, percentage]);

  useEffect(() => {
    pulse();
  }, [percentage, pulse]);

  return (
    <Svg style={styles.container} viewBox={circleConfig.viewBox}>
      <Circle
        className="ring"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke="gray"
      />

      <AnimatedCircle
        className="path"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke="teal"
        // strokeDasharray="75 25"
        strokeDasharray={`${animation} ${100 - animation}`}
        strokeDashoffset={INITIAL_OFFSET}
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CircleProgressBar2;
