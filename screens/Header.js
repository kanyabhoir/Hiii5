import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Camera from "react-native-vector-icons/Feather";
import Search from "react-native-vector-icons/Fontisto";

const Header = ({ navigation }) => {
    // gotologOutpage =()=>{
    //     navigation.navigate("profilescreen")
    // }
    return (
        <View style={styles.header}>
            <View style={styles.innerHeader}>
                <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700", marginLeft: 12 }} >Hii5</Text>
                <View style={{ flexDirection: "row" }}>
                    <Camera name='camera' style={{ marginRight: 25 }} color={"#ffffff"} size={20} />
                    <Search name='search' style={{ marginRight: 25 }} color={"#ffffff"} size={20} />

                    <TouchableOpacity onPress={() => navigation.navigate('archivedscreen')} style={{ marginRight: 15 }}>
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