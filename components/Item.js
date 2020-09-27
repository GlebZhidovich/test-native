import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function Item({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Date: {data.date}</Text>
      <Text style={styles.text}>Coordinates: {data.cors.join(', ')}</Text>
      <Text style={styles.text}>Address: {data.address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#ead011'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
