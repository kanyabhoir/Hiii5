import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogout } from '../../redux/Action';

const Getout = () => {
    const LoggedUser = useSelector((state) => state.UserReducer.registeredUser);
    console.log("LoggedUser=====>", LoggedUser);
    const dispatch = useDispatch();
    const logoutUser = async () => {
        dispatch(UserLogout(undefined))
        await AsyncStorage.removeItem("@UserLogindetails");
        props.navigation.push("login");
    };
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity style={styles.subButton}>
                <Text style={styles.submitText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logoutUser()} style={styles.LogOutbtn}>
                <Text style={styles.LogOutText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Getout

const styles = StyleSheet.create({
    subButton: {
        borderColor: '#ccc',
        borderRadius: 4,
        height: 50,
        width: Dimensions.get("screen").width / 1.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c731d',
        marginTop: 20
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    LogOutbtn: {
        borderColor: '#ccc',
        borderRadius: 4,
        height: 50,
        width: Dimensions.get("screen").width / 1.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginTop: 20
    },
    LogOutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
})