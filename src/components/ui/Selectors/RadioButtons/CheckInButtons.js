import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CheckInButton from './CheckInButton';

const CheckInButtons = props => {
  const [selected, setSelected] = useState();

  return (
    <View>
      <FlatList
        style={styles.categories}
        data={props.checkIns}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CheckInButton
            item={item}
            icon={item.icon}
            color={item.color}
            selected={selected}
            onSelect={() => {
              setSelected(item);
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CheckInButtons;
