import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import PhoneAnimation from './Components/PhoneAnimation'

const Calls = () => {

    return (
        <View style={{marginHorizontal:20,marginTop:12}}>

            <View style={{ flexDirection: "row" }}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30
                }}
                    source={require("../assets/Images/Anime.jpg")}
                />

                <View style={{ marginTop: 5, marginLeft: 15 }}>
                    <Text style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontSize: 18,
                        fontWeight: "700"
                    }}>Create call link</Text>
                    <Text style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontSize: 15,
                        fontWeight: "600"
                    }}>Share a link for your whatsApp call</Text>
                </View>
            </View>
            <PhoneAnimation />

            {/* <TouchableOpacity
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
                    }}
                    //  source={require("../assets/Images/Anime.jpg")}
                     />
                    <Text style={{
                        marginLeft: 20,
                        alignItems: 'center',
                        marginTop: 15
                    }}>Person 3</Text>
                </View>
                <TouchableOpacity style={{
                    marginLeft: 20,
                    alignItems: 'center',
                    marginTop: 15,
                    borderWidth: 1,
                    width: 30
                }}>
                    <PhoneAnimation />
                </TouchableOpacity>
            </TouchableOpacity> */}

        </View>
    )
}

export default Calls

const styles = StyleSheet.create({})


