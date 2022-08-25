import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {IconConstant} from '../../assets/Constant';

interface AddTodoProps {
  onInsert: () => {};
}

const AddTodo = ({onInsert}) => {
  const [text, setText] = useState('');

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={IconConstant.ADD_WHITE} />
    </View>
  );

  const onPress = () => {
    setText('');
    onInsert(text);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'white',
    borderColor: '#BDBDBD',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: '#26a69a',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});
