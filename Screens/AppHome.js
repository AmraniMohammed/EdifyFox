import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import CoursScreen from './CoursScreen';
import ForumScreen from './ForumScreen';
import ProfileScreen from './ProfileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faBook, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();


const AppHome = () => {
    return (
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    return <FontAwesomeIcon icon={ faHome } size={size} color={color} />;
                  } else if (route.name === 'Cours') {
                    return <FontAwesomeIcon icon={ faBook } size={size} color={color} />;
                  } else if (route.name === 'Forum') {
                    return <FontAwesomeIcon icon={ faUsers } size={size} color={color} />;
                  } else if (route.name === 'Profile') {
                    return <FontAwesomeIcon icon={ faUser } size={size} color={color} />;
                  } 
                },
                tabBarActiveTintColor: '#2980b9',
                tabBarInactiveTintColor: 'gray',
              })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Cours" component={CoursScreen} />
                <Tab.Screen name="Forum" component={ForumScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
    )
}

export default AppHome