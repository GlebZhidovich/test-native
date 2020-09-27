import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Query} from './Query';
import {Item} from './Item';

export function Table({items}) {
  const [row, setRow] = useState(null);

  function showRow(id) {
    setRow(id);
  }

  return (
    <View style={styles.container}>
      {row ? <Item data={items.find(item => item.id === row)}/> : <FlatList
        keyExtractor={item => `${item.id}`}
        data={items}
        renderItem={({item}) => (<Query
          item={item}
          show={showRow}/>)}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#ead011'
  },
  text: {
    padding: 5,
    color: '#0023fe',
    fontWeight: 'bold',
    fontSize: 20,
    border: '1px solid black'
  }
});
