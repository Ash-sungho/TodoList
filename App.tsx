import * as React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './src/components/AddTodo';
import Datehead from './src/components/Datehead';
import Empty from './src/components/Empty';
import TodoList from './src/components/TodoList';
import {storages} from './src/components/util/storages';

export type todoType = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = React.useState<todoType[]>([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: 'react-native 기초 공부', done: false},
    {id: 3, text: 'TodoList 만들어보기', done: false},
  ]);

  const today = new Date();

  const onInsert = (text: string): void => {
    console.log('...todos', ...todos);
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text: text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = (id: number) => {
    const nextTodos = todos.map(todo => {
      return todo.id === id ? {...todo, done: !todo.done} : todo;
    });
    setTodos(nextTodos);
  };

  const onRemove = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  // const test1 = async () => {
  //   await storages.setItem('test', '11값넣은거 테스트', () => {
  //     console.log('스토리지테스트 setItem 완료');
  //   });
  // };

  // const test2 = async () => {
  //   // const a = await storages.getItem('test', () => {
  //   //
  //   // });
  //   // console.log('확인 :', a);
  //   await storages.getItem('test').then(result => {
  //     console.log('getItem ::', result);
  //     console.log('스토리지테스트 getItem 완료');
  //   });
  // };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <Datehead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          {/* <Button
          title="asyncStoragetest1"
          onPress={() => {
            test1();
          }}
        />
        <Button
          title="asyncStoragetest2"
          onPress={() => {
            test2();
          }}
        /> */}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});
