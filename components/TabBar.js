import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {PAGE_COORS, PAGE_TABLE} from '../App';

export function TabBar({changePage}) {
  const [active, setActive] = useState(PAGE_COORS);

  function toggle(name) {
    if (active !== name) {
      changePage(name);
      setActive(name);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggle.bind(null, PAGE_COORS)}
        style={active === PAGE_COORS ? styles.selButton : styles.button}>
        <Text>Coors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggle.bind(null, PAGE_TABLE)}
        style={active !== PAGE_COORS ? styles.selButton : styles.button}>
        <Text>Table</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'black'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#DDDDDD',
  },
  selButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e90e15',
  }
});
