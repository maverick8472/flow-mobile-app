import React, {useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GoBack from '../../components/ui/GoBack';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

// const _renderScrollViewContent = () => {
//   const data = Array.from({length: 30});
//   return (
//     <View style={styles.scrollViewContent}>
//       {data.map((_, i) => (
//         <View key={i} style={styles.row}>
//           <Text>{i}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

const HabitDetails = ({props, navigation}) => {
  const scrollY = new Animated.Value(0);

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
  const buttonTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const gobackTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 0],
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

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.8],
    extrapolate: 'clamp',
  });

  const titleTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -38],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.fill}>
      <Animated.ScrollView
        style={styles.fill}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <Card style={styles.contentContainer}>
          <View style={styles.details}>
            <View style={styles.stats}>
              <MaterialIcons name="grid-large" size={20} />
              <Text> Health</Text>
            </View>
            <View style={styles.stats}>
              <MaterialIcons name="chart-line" size={20} />
              <Text> 4</Text>
            </View>
            <View style={styles.stats}>
              <MaterialIcons name="calendar-month-outline" size={20} />
              <Text>60</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            velit justo, aliquet et tempor ut, porta sed nunc. Vestibulum
            fringilla libero massa, eget iaculis dolor laoreet et. In hac
            habitasse platea dictumst. In facilisis tincidunt diam vel tempus.
            Quisque sem metus, ullamcorper nec rutrum placerat, rutrum sodales
            velit. Quisque ante ex, viverra vel nisl a, cursus pharetra massa.
            Integer euismod malesuada ante vel porttitor. Integer pretium
            consectetur elit ut euismod. Aliquam non risus eleifend, vestibulum
            augue in, porta nunc. Nulla est libero, dignissim ac risus vel,
            molestie molestie massa. Mauris enim massa, cursus ut bibendum vel,
            venenatis vitae arcu. Nulla dignissim convallis purus dictum
            placerat. In tortor sem, dapibus in velit eget, volutpat vehicula
            erat. Curabitur tincidunt, nulla nec eleifend vehicula, diam urna
            volutpat justo, congue tempor sapien dolor quis nunc. Morbi tempus
            aliquet leo, vitae ultricies tortor laoreet eget. Morbi ultrices
            ante feugiat quam cursus mollis. Nunc dignissim a sapien eget
            placerat. Vivamus aliquet ullamcorper mi, et consequat leo eleifend
            quis. Mauris sed vestibulum odio. Etiam elementum metus eu egestas
            efficitur. Nam tellus massa, tempor interdum metus sit amet,
            tincidunt lacinia leo. Maecenas mattis erat ut lobortis posuere.
            Etiam non arcu ante. Proin condimentum ultrices feugiat. Proin
            auctor, erat sollicitudin accumsan dictum, odio neque dapibus quam,
            a lobortis enim ex eu ex. Cras bibendum ante libero, vel interdum
            nulla finibus ac. Curabitur molestie ex vitae fringilla
            pellentesque. Sed viverra eu sem non posuere. Fusce volutpat
            efficitur libero, ac pulvinar sem vestibulum eget. In hac habitasse
            platea dictumst. Maecenas ut nibh ligula. Duis dolor magna,
            fermentum tristique rhoncus eu, dapibus a velit. Nam tempus nisl id
            sodales pellentesque. Ut vehicula ligula ut libero tincidunt, ut
            bibendum mi elementum. Etiam vel molestie arcu. Ut egestas ex ac
            ultricies tristique. Cras ipsum justo, vulputate ac cursus vitae,
            mollis a est. Cras et.
          </Text>
        </Card>
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

      <Animated.View style={[styles.textBar]}>
        <Animated.Text
          style={[
            styles.heroTitle,
            {opacity: heroTitleOpacity, transform: [{scale: titleScale}]},
          ]}>
          {'HERO'}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.headerTitle,
            // eslint-disable-next-line prettier/prettier
            {opacity: headerTitleOpacity, transform: [{translateY: titleTranslate}]},
          ]}>
          {'Hero'}
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={[styles.button, {transform: [{translateY: buttonTranslate}]}]}>
        <Button text="Accept" />
      </Animated.View>
      <Animated.View
        style={[styles.goBack, {transform: [{translateY: gobackTranslate}]}]}>
        <GoBack
          style={styles.gobackButton}
          text="go back"
          onPress={() => navigation.goBack()}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    backgroundColor: 'transparent',
    elevation: 30,
    position: 'relative',
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
  goBack: {
    height: 32,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 5,
    left: 1,
    right: 0,
  },
  gobackButton: {
    backgroundColor: '#03A9F4',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    // resizeMode: 'cover',
  },
  textBar: {
    // backgroundColor: 'transparent',
    // backgroundColor: 'pink',
    marginTop: 28,
    // marginTop: 40,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  heroTitle: {
    // textAlign: 'center',
    fontSize: 32,
    color: 'white',
    position: 'absolute',
    // bottom: 16,
    top: 40,
    left: 40,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    marginTop: 28,
  },
  button: {
    // backgroundColor: 'transparent',
    // marginTop: HEADER_MAX_HEIGHT,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: HEADER_MAX_HEIGHT - 32 / 2,
    left: 0,
    right: 0,
  },
  habitInfo: {
    height: 800,
  },
  scrollViewContent: {
    paddingTop: HEADER_MAX_HEIGHT,
  },
  contentContainer: {
    // marginTop: HEADER_MAX_HEIGHT + 20,
    // marginTop: 10,
    // borderTopLeftRadius: 40,

    // backgroundColor: 'transparent',
    // padding: 36,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: HEADER_MAX_HEIGHT - 20,
    // margin:20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // elevation: 10,
    // position: 'relative',
  },
  details: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around',
    // height: '15%',
    paddingTop: 30,
  },
  stats: {
    flexDirection: 'row',
    padding: 10,
  },
  description: {
    marginHorizontal: 20,
  },
  // row: {
  //   height: 40,
  //   margin: 16,
  //   backgroundColor: '#D3D3D3',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default HabitDetails;
