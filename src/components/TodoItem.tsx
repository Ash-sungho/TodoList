import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconConstant, ImageConstant} from '../../assets/Constant';

interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
}

const TodoItem = ({id, text, done}: ITodoItem) => {
  return (
    <View style={styles.item}>
      <View style={[styles.circle, done && styles.filled]}>
        {done && <Image source={IconConstant.CEHCK_WHITE} />}
      </View>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
});
