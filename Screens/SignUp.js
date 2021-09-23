import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const SignUp = (props) => {
    const navigation = props.navigation;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const signUpHandler = () => {
        //validation
        let validationResult = true;
        if(validationResult) {
            navigation.navigate('AppHome');
        } else {

        }
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.containerCenter}>
                <Text style={styles.loginTitle}>Sign Up</Text>
                <TextInput style={styles.input} value={firstName} placeholder="Firs Name" onChangeText={ text => setFirstName(text)} />
                <TextInput style={styles.input} value={lastName} placeholder="Last Name" onChangeText={ text => setLastName(text)} />
                <TextInput style={styles.input} value={emailText} placeholder="Email" keyboardType="email-address" onChangeText={ text => setEmailText(text)} />
                <TextInput style={styles.input} value={passwordText} placeholder="Password" secureTextEntry={true} onChangeText={ text => setPasswordText(text)} />
                <TouchableOpacity style = {styles.submitButton} onPress = {() => signUpHandler() }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
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
  });

export default SignUp
