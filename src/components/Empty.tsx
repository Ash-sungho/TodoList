import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImageConstant} from '../../assets/Constant';

// interface EmptyProp {}

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        style={styles.image}
        source={ImageConstant.YOUNG_AND_HAPPY}
        resizeMode={'cover'}
      />
      <Text style={styles.discription}>야호! 할일이 없습니다.</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  discription: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 300,
    height: 200,
    backgroundColor: 'gray',
  },
});
