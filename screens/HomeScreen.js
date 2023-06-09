import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar
 } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
            style={styles.container}
            >
                <SafeAreaView
                style={styles.droidSafeArea}
                />
                <ImageBackground
                source={require("../assets/homeScreenBg.png")}
                style={styles.imageBackgroundStyle}
                >
          
               
                <Text>HomeScreen</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container :{
        flex: 1,
},
imageBackgroundStyle :{
    resizeMode : "cover",
     flex: 1,
     justifyContent: "center",
     alignItems: "center"
},
droidSafeArea:{
marginTop :  Platform.OS === "android" ? StatusBar.currentHeight:0 
}

})