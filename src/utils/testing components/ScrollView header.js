import React, {useEffect, Component} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import Button from '../../components/ui/Button';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

// https://medium.com/appandflow/react-native-scrollview-animated-header-10a18cb9469e#.w0hvyttae
// https://medium.com/@habibridho/implementing-collapsing-toolbar-using-react-native-4a84e1718f11
const _renderScrollViewContent = () => {
  const data = Array.from({length: 30});
  return (
    <View style={styles.scrollViewContent}>
      {data.map((_, i) => (
        <View key={i} style={styles.row}>
          <Text>{i}</Text>
        </View>
      ))}
    </View>
  );
};
const Calendar = () => {
  const scrollY = new Animated.Value(0);

  // refressing content setup
  // this.state = {
  //   scrollY: new Animated.Value(
  //     // iOS has negative initial scroll value because content inset...
  //     Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
  //   ),
  //   refreshing: false,
  // };

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.2, 0],
    extrapolate: 'clamp',
  });
  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.8],
    extrapolate: 'clamp',
  });
  const titleTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -30],
    extrapolate: 'clamp',
  });
  const buttonTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2 - 100, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.2, 0],
    extrapolate: 'clamp',
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0.2, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.fill}>
      <Animated.ScrollView
        style={styles.fill}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={this.state.refreshing}
        //     onRefresh={() => {
        //       this.setState({refreshing: true});
        //       setTimeout(() => this.setState({refreshing: false}), 1000);
        //     }}
        //     // Android offset for RefreshControl
        //     progressViewOffset={HEADER_MAX_HEIGHT}
        //   />
        // }
        // // iOS offset for RefreshControl
        // contentInset={{
        //   top: HEADER_MAX_HEIGHT,
        // }}
        // contentOffset={{
        //   y: -HEADER_MAX_HEIGHT,
        // }}
      >
        {_renderScrollViewContent()}
      </Animated.ScrollView>
      <Animated.View
        pointerEvents="none"
        style={[styles.header, {transform: [{translateY: headerTranslate}]}]}>
        <Animated.Image
          style={[
            styles.backgroundImage,
            {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
          ]}
          source={require('../../assets/cat.jpg')}
        />
      </Animated.View>
      {/* <Animated.View
        style={[
          styles.bar,
          {transform: [{scale: titleScale}, {translateY: titleTranslate}]},
        ]}>
        <Text style={styles.title}>Title</Text>
        
      </Animated.View> */}
      <Animated.View style={[styles.bar]}>
        <Animated.Text
          style={{
            textAlign: 'center',
            fontSize: 32,
            color: 'black',
            position: 'absolute',
            bottom: 16,
            left: 16,
            opacity: heroTitleOpacity,
            transform: [{scale: titleScale}],
          }}>
          {'HERO'}
        </Animated.Text>
        <Animated.Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
            marginTop: 28,
            opacity: headerTitleOpacity,
            transform: [{translateY: titleTranslate}],
          }}>
          {'hero'}
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={[styles.button, {transform: [{translateY: buttonTranslate}]}]}>
        <Button text="Accept" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    paddingTop: HEADER_MAX_HEIGHT,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    // marginTop: HEADER_MAX_HEIGHT,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: HEADER_MAX_HEIGHT - 32 / 2,
    left: 0,
    right: 0,
  },
});

export default Calendar;
