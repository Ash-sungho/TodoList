import AsyncStorage from '@react-native-async-storage/async-storage';

export const storages = {
  // setItem: (key: string, value: string, callback?: Callback) => Promise<void>;
  setItem: async (key, value, callback) => {
    console.log('key, value, callback', key, value, callback && callback);
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
    let newValue;
    try {
      newValue = await AsyncStorage.getItem(key, callback && callback);
    } catch (error) {
      console.log(error.message);
    }
    switch (typeof value) {
      case 'array':
      case 'object':
        return (newValue = JSON.stringify(value));

      default:
        return newValue;
    }
  },

  clearAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      error.message;
    }
  },
};
