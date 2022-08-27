import * as React from 'react';
import {
  Alert,
  InteractionManager,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './src/components/AddTodo';
import Datehead from './src/components/Datehead';
import Empty from './src/components/Empty';
import TodoList from './src/components/TodoList';
import {Key, storages} from './src/util/storages';

export type todoType = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = React.useState<todoType[]>([
    // {id: 1, text: '작업환경 설정', done: true},
    // {id: 2, text: 'react-native 기초 공부', done: false},
    // {id: 3, text: 'TodoList 만들어보기', done: false},
  ]);
  // //불러오기
  // React.useEffect(() => {
  //   console.log('useEffet 불러오기', todos);
  //   storageLoadItem();
  // }, []);
  // //저장
  // React.useEffect(() => {
  //   console.log('useEffet 저장2', todos);
  //   storageSaveItem();
  // }, [todos]);
  //불러오기
  React.useEffect(() => {
    // storages.get(Key.TODOLIST).then(setTodos).catch(console.log);
    storageLoadItem();
  }, []);
  //저장
  React.useEffect(() => {
    // storages.set(Key.TODOLIST, todos).catch(console.log);
    storageSaveItem();
  }, [todos]);

  const storageSaveItem = async () => {
    try {
      await storages.setItem(Key.TODOLIST, todos);
    } catch (error) {
      console.log('todos 저장 실패');
      console.log(error);
    }
  };
  const storageLoadItem = async () => {
    try {
      const result = await storages.getItem(Key.TODOLIST);
      if (result) {
        setTodos(result);
      }
    } catch (error) {
      console.log('todos 로드 실패');
      console.log(error);
    }
  };

  const today = new Date();

  const onInsert = React.useCallback(
    (text: string): void => {
      if (text.length) {
        const nextId =
          todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
        const todo = {
          id: nextId,
          text: text,
          done: false,
        };
        setTodos(todos.concat(todo));
      } else {
        Alert.alert('확인', '할일을 입력해주세요!');
      }
    },
    [todos],
  );

  const onToggle = React.useCallback(
    (id: number) => {
      const nextTodos = todos.map(todo => {
        return todo.id === id ? {...todo, done: !todo.done} : todo;
      });
      setTodos(nextTodos);
    },
    [todos],
  );

  const onRemove = React.useCallback(
    (id: number) => {
      const nextTodos = todos.filter(todo => todo.id !== id);
      setTodos(nextTodos);
    },
    [todos],
  );

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
