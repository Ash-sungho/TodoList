import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {todoType} from '../../App';
import {IconConstant} from '../../assets/Constant';
import TodoItem from './TodoItem';

interface todoProp {
  todos: todoType[];
}

const TodoList = ({todos}: todoProp) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
      )}
      keyExtractor={item => {
        item.id.toString();
      }}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
