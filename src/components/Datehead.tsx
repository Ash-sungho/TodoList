import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface DateheadProp {
  date: Date;
}

const Datehead = ({date}: DateheadProp) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceHolder, {height: top}]} />
      <StatusBar backgroundColor={'#26a69a'} barStyle={'light-content'} />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {year}년 {month}월 {day}일{' '}
          <Text style={[styles.dateText, {fontSize: 18}]}>
            {hour}시 {minute}분
          </Text>
        </Text>
      </View>
    </>
  );
};

export default Datehead;

const styles = StyleSheet.create({
  statusBarPlaceHolder: {
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
  block: {
    // height: Dimensions.get('window').height * 0.1,
    padding: 16,
    backgroundColor: '#26a69a',
  },
});
