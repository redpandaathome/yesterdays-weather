import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName: "day-haze",
        gradient: ["#7F7FD5", "#91EAE4"]
    },
    Clouds : {
        iconName: "cloud",
        gradient: ['#373B44', '#4286f4']
    },
    Thunderstorm : {
        iconName: "weahter-lightning",
        gradient: ["#0f0c29", "#302b63"]
    },
    Drizzle : {
        iconName: "weather-rainy",
        gradient: ["#74ebd5", "#ACB6E5"]
    },
    Rain : {
        iconName: "weather-pouring",
        gradient: ["#667db6", "#0082c8"]
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#C9D6FF", "#E2E2E2"]
    },
    Atmosphere : {
        iconName: "weather-hazy",
        gradient: ['#d9a7c7', '#fffcdc']
    },
    Clear : {
        iconName: "Clear",
        gradient: ["#1c92d2", "#f2fcfe"]
    },
    Mist : {
        iconName: "weather-fog",
        gradient: ["#4AC29A", "#BDFFF3"]
    },
    Dust : {
        iconName: "emoticon-poop",
        gradient: ["#30E8BF", "#FF8235"]
    },
}

export default function Weather({ temp, condition }){
    return (

        <LinearGradient
            // Button Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container,{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                name={weatherOptions[condition].iconName} 
                size={86} 
                color="white" />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}/>

        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})