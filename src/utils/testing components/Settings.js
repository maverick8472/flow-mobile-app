import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

// const Settings = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Settings</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
// });

// export default Settings;

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

const Settings = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    // update progress until 100
    if (progress < 100) {
      setProgress(progress + 5);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Text>Loading…..</Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={[StyleSheet.absoluteFill, {backgroundColor: '#8BED4F', width}]}
        />
      </View>
      <Text>{`${progress}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Settings;
