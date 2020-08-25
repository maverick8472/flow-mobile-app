import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import RadioButton from '../../../../utils/testing components/CategoryButton';
import CategoryButton from './CategoryButton';

const CategoryButtons = props => {
  const [selected, setSelected] = useState();

  // if there is no color prop use default color function
  // console.log(selected);
  return (
    <View>
      <FlatList
        style={styles.categories}
        data={props.categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CategoryButton
            name={item.name}
            icon={item.icon}
            color={item.color}
            selected={selected}
            onSelect={() => {
              setSelected(item.name);
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

export default CategoryButtons;
