import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useReducer } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getToken} from './API/Users';
import AppHome from './Screens/AppHome';
import {AuthContext} from './Components/context';
import RootStackScreen from './Screens/RootStackScreen'

const Stack = createStackNavigator();


export default function App() {

  
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
      signIn: async (user) => {
        //console.log("=================================\n",user[0], "\n*************\n", "useName:", user[0].username, "\n*************\n",  getToken(user[0].username, user[0].password), "\n===============================\n")
        let userToken = String(user[0].id + user[0].username)
        const userNmae =  user[0].username
        //console.log(userToken)
        try {
            userToken = userToken
            await AsyncStorage.setItem('userToken',userToken)
        } catch(err) {
            console.log(err)
        }

        dispatch({ type: "LOGIN", id: userNmae, token: userToken})
      },
      signOut: async() => {
        try {
          userToken = "ghbnjd"
          await AsyncStorage.removeItem('userToken')
        } catch(err) {
          console.log(err)
        }
        dispatch({ type: "LOGOUT" })
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("hndkn");
      },
  }))
  
  useEffect(() => {
      setTimeout( async() => {
        let userToken = null
        try {
          userToken = await AsyncStorage.getItem('userToken')
        } catch(err) {
          console.log(err)
        }
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
      }, 1000)
  }, [])



  if(loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          {(loginState.userToken !== null) ? (<AppHome />) : (<RootStackScreen/>) }     
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
