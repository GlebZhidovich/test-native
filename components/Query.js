import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function Query({item, show}) {

  return (
    <View >
      <Text onPress={show.bind(null, item.id)} style={styles.text}>{item.date} | {item.cors.join(', ')} | {item.address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 5,
    color: '#0023fe',
    fontWeight: 'bold',
    fontSize: 20,
    border: '1px solid black'
  }
});
