import AsyncStorage from '@react-native-async-storage/async-storage';

export const Key = {
  TODOLIST: 'todoList',
};

export const storages = {
  setItem: async (key, value, callback) => {
    let newValue = value;
    switch (typeof value) {
      case 'array':
      case 'object':
        newValue = JSON.stringify(value);
        break;
    }

    try {
      await AsyncStorage.setItem(key, newValue, callback);
    } catch (error) {
      console.log(error.message);
    }
  },

  getItem: async (key, callback) => {
    let rawValue;
    try {
      rawValue = await AsyncStorage.getItem(key, callback);
      if (rawValue) {
      }
    } catch (error) {
      console.log(error.message);
    }
    return JSON.parse(rawValue);
  },

  clearAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      error.message;
    }
  },
  get: async key => {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error('No saved Todos');
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },

  set: async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },
};
