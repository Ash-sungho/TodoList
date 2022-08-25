import * as React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './src/components/AddTodo';
import Datehead from './src/components/Datehead';
import Empty from './src/components/Empty';
import TodoList from './src/components/TodoList';

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

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <Datehead date={today} />
          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
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
