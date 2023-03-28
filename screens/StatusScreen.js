import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
const StatusScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ paddingVertical: 12, backgroundColor: "#2c731d" }}>
        <View style={{ marginTop: 30, backgroundColor: "#2c731d", marginHorizontal: 10 }}>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>Hii5</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: "space-between",
          paddingHorizontal: 20,
          backgroundColor: "#2c731d",
          paddingVertical: 10
        }}>

        <TouchableOpacity onPress={() => navigation.navigate('chatscreen')}>
          <Text style={{ color: "#fff", fontWeight: '700', fontSize: 18 }}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('statusscreen')}>
          <Text style={{ color: "#fff", fontWeight: '700', fontSize: 18 }}>
            Status
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#fff", fontWeight: '700', fontSize: 18 }}>
            Calls
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 20
          }}>

          <View>
            <View style={{ borderWidth: 1,width:60,height:60,borderRadius:300,backgroundColor:"gray" }}></View>
            <View style={{ backgroundColor:"#fff",borderWidth: 1 ,width:20,height:20,borderRadius:200,marginLeft:40,marginTop:-23}}></View>
          </View>
          <View style={{marginLeft:18}}>
            <View><Text style={{ fontWeight:'700',fontSize:13 }}>My Status</Text></View>
            <View style={{ marginTop:10 }}><Text>Tap to add status update</Text></View>
          </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20
          }}>
          <View>
            <Image style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderRadius: 30
            }} source={require("../assets/Hii5Logo.png")} />
          </View>
          <View style={{
            marginLeft: 20,
            alignItems: 'center',
            marginTop: 15
          }}><Text>Person 1</Text></View>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20
          }}>
          <View>
            <Image style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderRadius: 30
            }} source={require("../assets/Hii5Logo.png")} />
          </View>
          <View style={{
            marginLeft: 20,
            alignItems: 'center',
            marginTop: 15
          }}><Text>Person 3</Text></View>
        </View>
      </ScrollView>
    </View>
  )
}

export default StatusScreen

const styles = StyleSheet.create({})