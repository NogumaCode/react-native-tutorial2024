import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface WeatherData {
  [key:string]:string;
}

const weatherData:WeatherData = {
  London: "20°C, Clear",
  Paris: "22°C, Sunny",
  NewYork: "18°C, Cloudy",
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather =()=>{
    setWeather(weatherData[city] || "データがありません" );

  }

  return (
    <View>
      <Text style={styles.title}>WeatherApp</Text>
      <TextInput style={styles.input} placeholder='都市を入れてください' value={city} onChangeText={setCity}/>
      <Button title="天気を取得" onPress={getWeather} />
      {weather ? <Text style={styles.weather}>{weather}</Text> : null }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  weather: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default WeatherApp
