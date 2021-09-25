import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {AuthContext} from '../Components/context'


const ProfileScreen = (props) => {
    const navigation = props.navigation
    const { signOut } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Image source={{uri: "https://i.postimg.cc/CMmM7b0t/profile.png"}} style={styles.userImage} />
            <View style={styles.InfoContainer}>
                <View style={styles.flexRow}>
                    <Text style={styles.infoTitle}>Full Name: </Text>
                    <Text>Flan Frtlan</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.infoTitle}>Level: </Text>
                    <Text>Sana rabi3a</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.infoTitle}>Email: </Text>
                    <Text>flanFrtlan@gmail.com</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.infoTitle}>Birthday: </Text>
                    <Text>01/02/1003 </Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <TouchableOpacity style = {styles.editButton} onPress={() => signOut()}>
                    <Text style = {styles.editButtonText}> Sing Out </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.editButton} onPress = {() => {} }>
                    <Text style = {styles.editButtonText}> Change your password </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    userImage: {
        height: 110,
        width: 110,
        marginVertical: 10
    },
    InfoContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#8F9BB3",
        marginBottom: 30,
        width: "70%",
    },
    sectionContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#8F9BB3",
        width: "70%",
    },
    flexRow: {
        flexDirection: "row",
        padding: 10,
        margin: 20
    },
    infoTitle: {
        fontWeight: 'bold',
    },
    editButton: {
        backgroundColor: '#4A4A4A',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 50
     },
     editButtonText:{
        color: 'white',
        textAlign: 'center',
     },
});

export default ProfileScreen
