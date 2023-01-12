import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'

const PostUpload = ({ navigation }) => {

    return (
        <View>
            <View style={{ paddingVertical: 12, backgroundColor: "#2c731d" }}>
                <View style={{ marginTop: 30, backgroundColor: "#2c731d",marginHorizontal:10 }}>
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
                    <Text style={{ color: "#fff",fontWeight:'700',fontSize:18 }}>
                        Chat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('statusscreen')}>
                    <Text style={{ color: "#fff",fontWeight:'700',fontSize:18 }}>
                        Status
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('callsscreen')}>
                    <Text style={{ color: "#fff",fontWeight:'700',fontSize:18 }}>
                        Calls
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{marginBottom:50}}>
                <TouchableOpacity onPress={() => navigation.navigate('archivedscreen')} style={{ alignItems: "center", padding: 15 }}><Text>Archived</Text></TouchableOpacity>
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
                    }}><Text>Person 2</Text></View>
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
                    }}><Text>Group 1</Text></View>
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
                    }}><Text>Person 4</Text></View>
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
                    }}><Text>Group 2</Text></View>
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
                    }}><Text>Person 5</Text></View>
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
                    }}><Text>Person 6</Text></View>
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
                    }}><Text>Person 7</Text></View>
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
                    }}><Text>kimaya 1</Text></View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PostUpload

const styles = StyleSheet.create({})