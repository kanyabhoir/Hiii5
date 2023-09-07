import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogout } from '../redux/Action';
import * as ImagePicker from 'expo-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

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
            <View style={{ paddingVertical: 22, backgroundColor: "#2c731d" }}>
                <View style={{
                    marginTop: 30, backgroundColor: "#2c731d",
                    marginHorizontal: 10, justifyContent: 'space-between',
                    display: 'flex', flexDirection: 'row'
                }}>
                </View>
            </View>

            <View style={{ alignItems: 'center',marginTop:20 }}>
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
                          marginTop: -23 }}>
                        <Image
                            style={{ border: 1, width: 15, height: 15, marginLeft: 2, marginTop: 2 }}
                            source={require("../assets/add.png")}
                        />
                    </View>
                </View>
                <View style={{marginTop:10}}><Text>{LoggedUser.name} !</Text></View>
                <TouchableOpacity style={styles.subButton}>
                    <Text style={styles.submitText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => logoutUser()} style={styles.LogOutbtn}>
                    <Text style={styles.LogOutText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen

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
    }
})