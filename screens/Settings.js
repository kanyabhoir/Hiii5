import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogout } from '../redux/Action';
import * as ImagePicker from 'expo-image-picker';
import Arrowleft from "react-native-vector-icons/AntDesign";
import Qrcodescan from "react-native-vector-icons/MaterialCommunityIcons";
import Key from "react-native-vector-icons/Fontisto";
import Locked from "react-native-vector-icons/Fontisto";
import Emojiemotions from "react-native-vector-icons/MaterialIcons";
import Chat from "react-native-vector-icons/MaterialIcons";
import Bell from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
    const navigation = useNavigation();

    const data = [
        { name: "Jane Doe", uri: require("../assets/Images/Person7.jpeg"), time: "10.09 am", Message: "talk to you latter" },
    ];

    const [image, setImage] = useState([]);
    const LoggedUser = useSelector((state) => state.UserReducer.registeredUser);
    console.log("LoggedUser=====>", LoggedUser);
    const dispatch = useDispatch();

    const logoutUser = async () => {
        dispatch(UserLogout(undefined))
        await AsyncStorage.removeItem("@UserLogindetails");
        props.navigation.push("login");
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            //   allowsEditing: true,
            allowsMultipleSelection: true,
            selectionLimit: 10,
            aspect: [4, 3],
            quality: 1,
        });
        console.log("result", result);
        if (!result.cancelled) {
            setImage(result.uri ? [result] : result.selected);
        }
    };


    const onSubmit = (data) => {
        const Images = {
            "images": image,
        };
        let merged = { ...data, ...Images }
        // console.log(merged);
        dispatch(PostUploadHandle(merged))
    }
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.innerheader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Arrowleft name='arrowleft' color={"white"} size={25} /></TouchableOpacity>
                    <View><Text style={styles.title}>Settings</Text></View>
                    <View></View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={()=>navigation.navigate("getout")} style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20, justifyContent: "space-between", marginBottom: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => pickImage()}
                            style={{
                                borderWidth: 2,
                                borderRadius: 100,
                                width: 70,
                                height: 70,
                            }}>
                            {image.map((item, i) => {
                                return (
                                    <Image
                                        key={i}
                                        source={{ uri: item.uri }}
                                        style={{ width: 96, height: 96, borderRadius: 100 }}
                                    />
                                )
                            })}
                        </TouchableOpacity>

                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text>{LoggedUser.name}</Text>
                            <Text>kannya ouawduh uhsd jkd....</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 23 }}><Qrcodescan name='qrcode-scan' size={25} /></View>
                </TouchableOpacity>
                <View style={{ borderWidth: 1 }} />
                <View style={{marginHorizontal:20,marginBottom:100}}>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 30 }}><Key name='key' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Account</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>Security notification, chnage, number</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>number</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 30 }}><Locked name='locked' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Privacy</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>Block contacts, disappering</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>messages</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 25 }}><Emojiemotions name='emoji-emotions' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Avatar</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>Create, edit, profile photo</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 25 }}><Chat name='chat' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Chats</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>Theme, wallpapers, chat history</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 25 }}><Bell name='bell' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Notifications</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>Message, group & call tones</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 25 }}><Key name='key' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Storage and data</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>Network usage, auto-download</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 30 }}><Key name='key' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>App language</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>English (phone's language)</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 30 }}><Key name='key' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Help</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>Help center, contact us, privacy</Text>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", color: "#000" }}>policy</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, flexDirection: "row" }}>
                        <View style={{ marginTop: 30 }}><Key name='key' size={20} /></View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <Text style={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: "700", color: "#000" }}>Invite a friend</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>


            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View>
                    <TouchableOpacity
                        onPress={() => pickImage()}
                        style={{
                            borderWidth: 2,
                            borderRadius: 100,
                            width: 100, height: 100,
                        }}>
                        {image.map((item, i) => {
                            return (
                                <Image
                                    key={i}
                                    source={{ uri: item.uri }}
                                    style={{ width: 96, height: 96, borderRadius: 100 }}
                                />
                            )
                        })}
                    </TouchableOpacity>
                    <View style={{
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        marginLeft: 70,
                        marginTop: -23
                    }}>
                        <Image
                            style={{ border: 1, width: 15, height: 15, marginLeft: 2, marginTop: 2 }}
                            source={require("../assets/add.png")}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}><Text>{LoggedUser.name} !</Text></View>
                <TouchableOpacity style={styles.subButton}>
                    <Text style={styles.submitText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => logoutUser()} style={styles.LogOutbtn}>
                    <Text style={styles.LogOutText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Settings

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
    header: {
        paddingVertical: 12,
        backgroundColor: "#2c731d"
    },
    innerheader: {
        marginTop: 30,
        backgroundColor: "#2c731d",
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "700"
    },
})