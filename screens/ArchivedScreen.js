import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Check from "react-native-vector-icons/Ionicons";
import Arrowleft from "react-native-vector-icons/AntDesign";

const ArchivedScreen = ({ navigation }) => {
  const data = [
    { name: "Jane Doe", uri: require("../assets/Images/Person7.jpeg"), time: "10.09 am", Message: "talk to you latter" },
    { name: " Doe", uri: require("../assets/Images/person4.jpeg"), time: "Yesterday", Message: "talk to you latter" },
    { name: "Victor", uri: require("../assets/Images/Anime.jpg"), time: "2.52 pm", Message: "talk to you latter" },

  ];
  const gotoChatScreen = (name) => {
    navigation.navigate("chatscreen", { name: name })
  }
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.innerheader}>
          <View><Arrowleft name='arrowleft'/></View>
          <View></View>
          <Text style={styles.title}>Hii5</Text>
        </View>
      </View>
      <View
        style={styles.description}>
        <Text>These chats stay archived when new messages are received. Tap to change</Text>

      </View>
      <View style={styles.viw} />
      <View>
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
                      <Text style={styles.msg}>{data.Message}</Text>
                    </View>

                  </View>
                  <View><Text style={styles.time}>{data.time}</Text></View>
                </View>
              </TouchableOpacity>
              <View style={styles.viw} />
            </>
          )
        })}
      </View>

    </View>
  )
}

export default ArchivedScreen

const styles = StyleSheet.create({
  header: { paddingVertical: 12, backgroundColor: "#2c731d" },
  innerheader: { marginTop: 30, backgroundColor: "#2c731d", marginHorizontal: 10 },
  title: { fontSize: 18, color: "#fff", fontWeight: "700" },
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // backgroundColor: "#2c731d",
    paddingVertical: 10
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