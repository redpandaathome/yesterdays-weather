import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName: "weather-hazy",
        gradient: ["#7F7FD5", "#91EAE4"],
        title: "Hazy",
        subtitle: "Time to take a walk for dry faces"
    },
    Clouds : {
        iconName: "cloud",
        gradient: ['#373B44', '#4286f4'],
        title: "Cloudy",
        subtitle: "Perfect time to take a walk for vampires"
    },
    Thunderstorm : {
        iconName: "weather-lightning",
        gradient: ["#0f0c29", "#302b63"],
        title: "Lightning!",
        subtitle: "Put the kettle on, it's show time"
    },
    Drizzle : {
        iconName: "weather-rainy",
        gradient: ["#74ebd5", "#ACB6E5"],
        title: "Drizzle",
        subtitle: "Wanna put some jazz music on? Coffee?"
    },
    Rain : {
        iconName: "weather-pouring",
        gradient: ["#667db6", "#0082c8"],
        title: "Rainy outside",
        subtitle: "Cuppa, a scone, and a book? "
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Snowy",
        subtitle: "Ready to meet Olaf?"
    },
    Atmosphere : {
        iconName: "weather-hazy",
        gradient: ['#d9a7c7', '#fffcdc'],
        title: "The atmosphere...",
        subtitle: "Looks suspicious"
    },
    Clear : {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "Let's go outside and get some sunlight, yeah!"
    },
    Mist : {
        iconName: "weather-fog",
        gradient: ["#4AC29A", "#BDFFF3"],
        title: "Mist",
        subtitle: "Misty misty-! Foggy foggy-!"
    },
    Dust : {
        iconName: "emoticon-poop",
        gradient: ["#30E8BF", "#FF8235"],
        title: "Dust",
        subtitle: "Don't forget your mask if you have to go outside!"
    },
}

export default function Weather({ temp, condition }){
    return (

        <LinearGradient
            // Button Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName} 
                    size={86}
                    color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>

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
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})