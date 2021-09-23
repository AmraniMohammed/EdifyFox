import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';


const Loading = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.container}>
        <ImageBackground source={{uri: 'https://i.postimg.cc/cCw95x3L/top-view-laptop-with-diploma-globe-1.jpg'}} style={styles.bgImage} resizeMode="cover" >
            <Image source={{uri: 'https://i.postimg.cc/mDB8zgsC/wave-3.png'}} resizeMode="cover" style={styles.wavesImage} />
            <View style={styles.btnsContainer} >
                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Login') }>
                    <Text style = {styles.buttonText}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('SignUp') }>
                    <Text style = {styles.buttonText}> T9ad compte? </Text>
                </TouchableOpacity>
            </View>
        </ ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        position: "relative"
    },
    bgImage: {
        flex: 1,
        justifyContent: "center"
    },
    wavesImage: {
        height: 500,
        width: "100%",
        position: "absolute",
        bottom: -30,
    },
    btnsContainer: {
        position: "absolute",
        bottom: 100,
        left: 80,
        right: 80,
    },
    button: {
        backgroundColor: '#4A4A4A',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 50
     },
     buttonText:{
        color: 'white',
        textAlign: 'center'
     },
  });
  

export default Loading
