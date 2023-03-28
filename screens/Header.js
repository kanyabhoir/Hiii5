import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Camera from "react-native-vector-icons/Feather";
import Search from "react-native-vector-icons/Fontisto";
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={styles.innerHeader}>
                <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700", marginLeft: 12 }} >Hii5</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("captureImage")}>
                        {/* <Image style={{
                            width: 50,
                            height: 50,
                            borderWidth: 1,
                            borderRadius: 30
                        }} source={require("../assets/Images/Anime.jpg")} /> */}
                        <Camera name='camera' style={{ marginRight: 25 }} color={"#ffffff"} size={20} />
                    </TouchableOpacity>
                    <Search name='search' style={{ marginRight: 25 }} color={"#ffffff"} size={20} />

                    <TouchableOpacity onPress={() => navigation.navigate("settings")} style={{ marginRight: 15 }}>
                        <Image style={{
                            width: 20,
                            height: 20,
                        }} source={require("../assets/menu.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingVertical: 12,
        backgroundColor: "#2c731d",
    },
    innerHeader: {
        backgroundColor: "#2c731d",
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get("screen").width / 1
    },
})