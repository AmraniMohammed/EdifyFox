import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faCheckCircle, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable';

const Login = (props) => {
    const navigation = props.navigation;

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true
      })

    const emailChangeHandler = (email) => {
        if(email.length != 0) {
            setUserData({
                ...userData,
                email: email,
                checkTextInputChange: true
            })
        } else {
            setUserData({
                ...userData,
                email: "",
                checkTextInputChange: false
            })
        }
    }
    const passwordChangeHandler = (password) => {
        setUserData({
            ...userData,
            password: password
        })
    }
    const updateSecureTextEntry = () => {
        setUserData({
            ...userData,
            secureTextEntry: !userData.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#34495e' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Mrhba</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" duration={1000} style={styles.footer}>
                <Text style={styles.textFooter}>Email</Text>
                <View style={styles.action}>
                    <FontAwesomeIcon icon={ faUser } color="#000" size={20}/>
                    <TextInput placeholder="Your Email" placeholderTextColor="#ced6e0" style={styles.textInput} autoCapitalize="none" onChangeText={(email) => emailChangeHandler(email)} value={userData.email} />
                    {userData.checkTextInputChange && <Animatable.View animation="bounceIn">
                        <FontAwesomeIcon icon={ faCheckCircle } color="#ced6e0" size={20}/>
                    </Animatable.View>}
                </View>
                <Text style={[styles.textFooter, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesomeIcon icon={ faLock } color="#000" size={20}/>
                    <TextInput placeholder="Your Password"  placeholderTextColor="#ced6e0" style={styles.textInput} autoCapitalize="none" secureTextEntry={userData.secureTextEntry} onChangeText={(password) => passwordChangeHandler(password)} value={userData.password} />
                    <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                        <FontAwesomeIcon icon={userData.secureTextEntry? faEyeSlash : faEye } color="#ced6e0" size={20}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#34495e', '#203544']} style={styles.signIn}>
                        <Text style={styles.textSignIn}>Login</Text>
                    </LinearGradient>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.signIn, {
                        borderColor: "#34495e",
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
                        <Text style={styles.textSignUp}>T9ad compte?</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#34495e'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textFooter: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    textSignIn: {
        fontSize: 18,
        fontWeight: '600',
        color: "#fff"
    },
    textSignUp: {
        fontSize: 18,
        fontWeight: '600' ,
        color: '#34495e'

    }
  });

export default Login
