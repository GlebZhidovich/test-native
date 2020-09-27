import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const token = '8586728b48c740';
const tokenOpen = 'f0d0ff183d36411dbc63d4ae7a498776';
const tokenWeather = '1d42b4b6dfc1bb6fa7e34f21899315b7';

let id = 1;

export function Coors({setData}) {
  const [cors, setCors] = useState(['', '']);
  const [address, setAddress] = useState('');
  const [weather, setWeather] = useState('');

  function addData(address) {
    const date = new Date().toString();
    setData({date, cors, address, id});
    id += 1;
  }

  useEffect(() => {
    fetch(`https://ipinfo.io?token=${token}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((data) => {
        setCors(data.loc.split(','));
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  useEffect(() => {
    const [lat, lon] = cors;
    if (lat !== '') {
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${tokenOpen}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.status);
        })
        .then((data) => {
          const address = data.results[0].formatted;
          addData(address)
          setAddress(address);
        })
        .catch(err => {
          console.log(err)
        });
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${tokenWeather}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.status);
        })
        .then((data) => {
          setWeather(data.main.temp);
        })
        .catch(err => {
          console.log(err)
        });
    }
  }, [cors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your coordinates:</Text>
      <Text style={styles.text}>Latitude: {cors[0]}</Text>
      <Text style={styles.text}>Longitude: {cors[1]}</Text>
      <Text style={styles.text}>Address: {address}</Text>
      <Text style={styles.text}>Weather: {weather} &#8451;</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 30,
    backgroundColor: '#5d8845'
  },
  text: {
    color: '#0023fe',
    fontWeight: 'bold',
    fontSize: 20
  }
});
