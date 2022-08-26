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
      rawValue = await AsyncStorage.getItem(key, callback && callback);
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
};
