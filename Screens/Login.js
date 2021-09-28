import React, { useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform, Alert } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faCheckCircle, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import * as Animatable from 'react-native-animatable'
import {AuthContext} from '../Components/context'
import {getUsers} from '../API/Users'


const Login = (props) => {
    const navigation = props.navigation

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
    })

    const { signIn } = useContext(AuthContext)

    const emailChangeHandler = (email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === true) {
            setUserData({
                ...userData,
                email: email,
                checkTextInputChange: true,
                isValidEmail: true
            })
        } else {
            setUserData({
                ...userData,
                email: email,
                checkTextInputChange: false
            })
        }
    }

    const passwordChangeHandler = (password) => {
        
        if( password.trim().length >= 4 ) {
            setUserData({
            ...userData,
            password: password,
            isValidPassword: true
        })
        } else {
            setUserData({
                ...userData,
                password: password,
                isValidPassword: false
            })
        }
    }

    const updateSecureTextEntry = () => {
        setUserData({
            ...userData,
            secureTextEntry: !userData.secureTextEntry
        })
    }

    async function loginHandler() {
        const users = await getUsers()
        //console.log("hana: \n", users, "\n---------------------")
        const foundUser = await users.filter(user => (userData.email === user.email && userData.password === user.password))
        //console.log("hachno l9it: \n", foundUser)
        if(foundUser.length === 0) {
            Alert.alert("Invalid User", "Email or Password is incorrect", [{text: 'Ok'}])
            return;
        }
        signIn(foundUser)
    }

    const emailValidationHandler = (email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if (reg.test(email) === false){
            setUserData({
                ...userData,
                isValidEmail: false
            })
           }
           else{
                setUserData({
                    ...userData,
                    isValidEmail: true
                })
           }
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
                    <TextInput placeholder="Your Email" placeholderTextColor="#ced6e0" style={styles.textInput} autoCapitalize="none" onChangeText={(email) => emailChangeHandler(email)} value={userData.email} onEndEditing={e => emailValidationHandler(e.nativeEvent.text)} />
                    {userData.checkTextInputChange && <Animatable.View animation="bounceIn">
                        <FontAwesomeIcon icon={ faCheckCircle } color="#ced6e0" size={20}/>
                    </Animatable.View>}
                </View>
                { !userData.isValidEmail && 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Wrong Email</Text>
                </Animatable.View>
                }
                <Text style={[styles.textFooter, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesomeIcon icon={ faLock } color="#000" size={20}/>
                    <TextInput placeholder="Your Password"  placeholderTextColor="#ced6e0" style={styles.textInput} autoCapitalize="none" secureTextEntry={userData.secureTextEntry} onChangeText={(password) => passwordChangeHandler(password)} value={userData.password} />
                    <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                        <FontAwesomeIcon icon={userData.secureTextEntry? faEyeSlash : faEye } color="#ced6e0" size={20}/>
                    </TouchableOpacity>
                </View>
                { !userData.isValidPassword && 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Password must be at least 4 characters</Text>
                </Animatable.View>
                }
                <TouchableOpacity>
                    <Text style={{color: '#34495e', marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn}  onPress={() => loginHandler()}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#34495e', '#203544']} style={styles.signIn}>
                            <Text style={styles.textSignIn}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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

    },
    errorMsg: {
        color: '#e74c3c',
        fontSize: 14,
    },
  });

export default Login
