import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconConstant} from '../../assets/Constant';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem = ({id, text, done, onToggle, onRemove}: ITodoItem) => {
  const remove = () => {
    Alert.alert('삭제', '정말로 삭제하시겠어요?', [
      {text: '취소', onPress: () => {}, style: 'cancel'},
      {
        text: '삭제',
        onPress: () => {
          onRemove(id);
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onToggle(id);
      }}>
      <View style={styles.item}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && <Image source={IconConstant.CEHCK_WHITE} />}
        </View>
        <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
        {done ? (
          <TouchableOpacity
            onPress={() => {
              remove();
            }}>
            <Icon name="delete" size={32} color={'red'} />
          </TouchableOpacity>
        ) : (
          <View style={styles.removePlaceHolder} />
        )}
      </View>
    </TouchableOpacity>
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
  removePlaceHolder: {
    width: 32,
    height: 32,
  },
});
