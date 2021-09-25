import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Loading from './Loading';
import Login from './Login';
import SignUp from './SignUp';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false}}>
        <RootStack.Screen name="Loading" component={Loading} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="SignUp" component={SignUp} />
    </RootStack.Navigator>
);

export default RootStackScreen;