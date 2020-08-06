import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "7aee812ef794c947690b4bcdc75778bd";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data: {
              main : { temp },
              weather
            } 
          } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
    this.setState({
      isLoading: false, 
      temp, 
      condition: weather[0].main,
      }
    );
  }
  
  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });
      
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();    
  }
  
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}


