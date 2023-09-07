import { StyleSheet, Text, View, Animated, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useEffect, Component } from 'react'
import { keyframes, stagger } from "popmotion";

const CallsScreen = ({ navigation }) => {

  gotoAnimation = () => {
    navigation.navigate('callanimation');
  }
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

        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Text style={{ color: "#fff", fontWeight: '700', fontSize: 18 }}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('statusscreen')}>
          <Text style={{ color: "#fff", fontWeight: '700', fontSize: 18 }}>
            Status
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('callsscreen')}>
          <Text style={{ color: "#fff", fontWeight: '700', fontSize: 18 }}>
            Calls
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
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
            }} source={require("../assets/Images/person1.jpg")} />
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
            paddingHorizontal: 20,
            justifyContent: "space-between"
          }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderRadius: 30
            }} source={require("../assets/Images/Anime.jpg")} />
            <Text style={{
              marginLeft: 20,
              alignItems: 'center',
              marginTop: 15
            }}>Person 3</Text>
          </View>
          <TouchableOpacity  onPress={()=>gotoAnimation()} style={{
            marginLeft: 20,
            alignItems: 'center',
            marginTop: 15,
            borderWidth: 1,
            width: 30
          }}>
            
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default CallsScreen

const getCircle = (radius, backgroundColor = "gold") => ({
  backgroundColor,
  width: radius * 6,
  height: radius * 6,
  borderRadius: radius * 3,
  position: "absolute",
  flex: 1,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: getCircle(100),
  midCircle: {
    ...getCircle(75),
    alignItems: "center",
    justifyContent: "center",
  },

})


