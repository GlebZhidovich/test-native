import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabBar} from './components/TabBar';
import {Coors} from './components/Coors';
import {Table} from './components/Table';

export const PAGE_COORS = 'coors';
export const PAGE_TABLE = 'table';

export default function App() {
  const [page, setPage] = useState(PAGE_COORS);
  const [requestData, setRequestData] = useState([]);

  function changePage(name) {
    setPage(name);
  }

  function addData(data) {
    setRequestData((prev) => [...prev, data]);
  }

  return (
    <View style={styles.container}>
      {page === PAGE_COORS ?  <Coors setData={addData}/> : <Table items={requestData}/>}
      <TabBar changePage={changePage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c62121',
    justifyContent: 'flex-end'
  },
});
