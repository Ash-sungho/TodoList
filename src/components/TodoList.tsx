import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {todoType} from '../../App.js';
import TodoItem from './TodoItem';

interface todoProp {
  todos: todoType[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList = ({todos, onToggle, onRemove}: todoProp) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <View key={item.id}>
          <TodoItem
            id={item.id}
            text={item.text}
            done={item.done}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={item => item.id.toString()}
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
