import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable';


const Loading = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#34495e' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image animation="bounceIn"  source={require('../assets/test.png')} style={styles.logo} />
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.title}>Start Learning!!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#34495e', '#203544']} style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <FontAwesomeIcon icon={ faAngleRight } color="#fff" size={20}/>
                        </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#34495e'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        paddingRight: 3,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
  });
  

export default Loading
