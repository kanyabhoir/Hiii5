import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Archived from "react-native-vector-icons/Entypo";
import Check from "react-native-vector-icons/Ionicons";


const Chats = () => {
    const navigation = useNavigation();

    const data = [
        { name: "John (info tech)", uri: require("../assets/Images/person1.jpg"), time: "9.57 pm", userMessage: "talk to you latter" },
        { name: "John Doe", uri: require("../assets/Images/Person2.jpg"), time: "7.09 pm", userMessage: "hey!" },
        { name: "Victor Wayne", uri: require("../assets/Images/Group1.jpeg"), time: "7.49 pm", userMessage: "okay" },
        { name: "Jane Doe", uri: require("../assets/Images/Person7.jpeg"), time: "7.36 pm", userMessage: "So many books, so little time." },
        { name: " Doe", uri: require("../assets/Images/person4.jpeg"), time: "5.34 pm", userMessage: "let it be" },
        { name: "Victor", uri: require("../assets/Images/Anime.jpg"), time: "4.50 pm", userMessage: "tahnx" },
        { name: "Jane Doe", uri: require("../assets/Images/Person7.jpeg"), time: "7.36 pm", userMessage: "So many books, so little time." },
        { name: " Doe", uri: require("../assets/Images/person4.jpeg"), time: "5.34 pm", userMessage: "let it be" },
        { name: "Victor", uri: require("../assets/Images/Anime.jpg"), time: "4.50 pm", userMessage: "tahnx" },

    ];
    const gotoChatScreen = (name) => {
        console.log("name====>", name);
        navigation.navigate("chatscreen", { name: name })
    }


    return (
        <View>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('archivedscreen')}
                    style={{
                        padding: 15,

                        flexDirection: "row",
                        // borderWidth:1
                    }}>
                    <View style={{ marginLeft: 18, }}><Archived name='browser' size={20} /></View>
                    <View style={{ marginLeft: 30 }}><Text style={styles.archive}>Archived</Text></View>

                </TouchableOpacity>

                {/* <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} /> */}
                {data.map((data, i) => {
                    return (
                        <>
                            <TouchableOpacity
                                onPress={() => gotoChatScreen(data.name)}
                                style={styles.userinfo}>
                                <View>
                                    <Image style={styles.img} source={data.uri} />
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    marginTop: 5,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: "83%"

                                }}>
                                    <View>
                                        <Text style={styles.name}>{data.name}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Check name='checkmark-done' size={18} style={{ marginTop: 1 }} />
                                            <Text style={styles.msg}>{data.userMessage}</Text>
                                        </View>
                                    </View>
                                    <View><Text style={styles.time}>{data.time}</Text></View>
                                </View>
                            </TouchableOpacity>
                            {/* <View style={styles.viw} /> */}
                        </>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({
    header: {
        paddingVertical: 12,
        backgroundColor: "#2c731d"
    },

    innerHeader: {
        marginTop: 30,
        backgroundColor: "#2c731d",
        marginHorizontal: 10,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row'
    },
    menutitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#2c731d",
        paddingVertical: 10
    },
    title: {
        color: "#fff",
        fontWeight: '700',
        fontSize: 18
    },
    archive: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontSize: 15,
        fontWeight: "700"
    },
    userinfo: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    img: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 30
    },
    name: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontSize: 15,
        fontWeight: "700"
    },
    time: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontSize: 11,
        fontWeight: "500",
        color: "#000000"
    },
    viw: {
        borderWidth: 1,
        borderColor: "#c8c8c8"
    },
    msg: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontSize: 15,
    }
})