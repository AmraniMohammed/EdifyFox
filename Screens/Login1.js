import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const Login = (props) => {
    const navigation = props.navigation;
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [loginSession, setLoginSession] = useState(undefined);
    
    const loginHandler = () => {
        let email = "edify@gmail.com";
        let password = "edify@"
        if(emailText === email && passwordText === password) {
            setLoginSession(true);
            navigation.navigate('AppHome');
        } else {
            setLoginSession(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerCenter}>
                <Text style={styles.loginTitle}>Login</Text>
                <TextInput style={styles.input} value={emailText} placeholder="Email" keyboardType="email-address" onChangeText={ text => setEmailText(text)} />
                <TextInput style={styles.input} value={passwordText} placeholder="Password" secureTextEntry={true} onChangeText={ text => setPasswordText(text)} />
                <View>{(loginSession === false) && <Text style={styles.error} >Shah les informations</Text>}</View>
                <TouchableOpacity style = {styles.submitButton} onPress = {() => loginHandler() }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.singUpButton} onPress = {() => navigation.navigate('SignUp') }>
                    <Text style = {styles.singUp}> T9ad compte? </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: "#fff"
    },
    containerCenter: {
        marginHorizontal: 30
    },
    loginTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    input: {
        padding: 10,
        marginBottom: 20,
        height: 40, 
    	borderColor: '#1A2138', 
        borderRadius: 5,
    	borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#274BDB',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 50
     },
     submitButtonText:{
        color: '#F2F6FF',
        fontWeight: "bold" ,
        textAlign: 'center'
     },
     error: {
         color: 'red',
         marginVertical: 10
     },
     singUpButton: {
        padding: 8,
     },
     singUp: {
        color: "#3498db",
        textAlign: 'center'
     }
  });

export default Login
