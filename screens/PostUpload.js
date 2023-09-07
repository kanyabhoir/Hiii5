
import React, { useState } from 'react';
import {
    SafeAreaView,
    Image, StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    useWindowDimensions,
    ScrollView, Dimensions
} from 'react-native';
import People from "react-native-vector-icons/Ionicons";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Chats from './Chats';
import Status from './Status';
import Calls from './Calls';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const ChatsScreen = () => (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true}>
        <Chats />
    </ScrollView>
);
const StatusScreen = () => (
    <Status />
);
const CallsScreen = () => (
    <Calls />
);
const renderScene = SceneMap({
    chats: ChatsScreen,
    status: StatusScreen,
    calls: CallsScreen,
});

const PostUpload = () => {
    const navigation = useNavigation();

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'chats', title: 'Chats' },
        { key: 'status', title: 'Status' },
        { key: 'calls', title: 'Calls' },
    ]);

    return (
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#2c731d" barStyle="dark-content" />
            <View style={styles.innercontainer}>
                <View style={styles.Header}>
                    <Header />
                </View>
                <TabView
                    tabBarLabelStyle={styles.tabBarLabel}
                    navigationState={{ index, routes, navigation }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={props =>
                        <TabBar {...props} style={{ backgroundColor: '#2c731d' }}
                            // renderLabel={({ route, focused }) => (
                            //     <View style={{borderWidth:1,marginRight:40}}>
                            //         <People name='people' size={20} />
                            //     </View>
                            // )}
                            labelStyle={styles.tabBarLabel}
                        />

                    }
                />
            </View>
        </View>
    )
}

export default PostUpload

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F1F1F1",
    },
    innercontainer: {
        // marginHorizontal: 17,
        // marginTop: 20,
        flex: 1,
    },
    Header: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    tabBarLabel: {
        color: "#ffffff",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "700"
    },
    locationName: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 17,
        color: "#4B4B4B",
        marginLeft: 6
    },

    upcomingtxt: {
        fontFamily: 'Lato',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19,
        color: "#FEAE2A",
        marginLeft: 59
    },
    pastTxt: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
        color: "#8E8E8E",
        marginRight: 60
    },
    cardCantainer: {
        marginTop: 24,
        marginHorizontal: 24,
    },
    SecCardCantainer: {
        marginTop: 24,
        marginHorizontal: 24,
    },
    innerCantainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 12
    },
    categoryType: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 10,
        lineHeight: 12,
        paddingHorizontal: 26,
        marginVertical: 4
    },
    accountType: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 11,
        lineHeight: 13,
    },
    availableTime: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 12,
        lineHeight: 14,
        color: "#313030",
    },
    LockImages: {
        height: 12,
        width: 9,
    },
    DefaultImage: {
        height: 18,
        width: 18
    },
    ClockImage: {
        height: 12,
        width: 12
    },
    matchTime: {
        flexDirection: "row",
        marginBottom: 11
    },
    DefaultImageView: {
        marginRight: 13
    },
    availableCourttxt: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 11,
        lineHeight: 13,
        color: "#5F5E5E"
    },
    availableCourt: {
        flexDirection: "row",
        marginBottom: 7
    },
    courtDetails: {
        flexDirection: "row",
        marginBottom: 21,
    },
    CheckImage: {
        height: 12,
        width: 12
    },
    courtStatus: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 29,
    },
    courttxt: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 11,
        lineHeight: 13,
        color: "#5F5E5E"
    },
    courtPriceInfo: {
        marginLeft: 18,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    CardPaymentImage: {
        width: 12,
        height: 9,
        marginTop: 2
    },
    courtPrice: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 11,
        lineHeight: 13,
        color: "#5F5E5E"
    },
    Count: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 19,
        color: "#000000",
        marginLeft: 8
    },
    Going: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14,
        color: "#747474",
    },
    number: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: 16,
        lineHeight: 19,
        color: "#FFAC00",
    },
    PlayersRequired: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14,
        color: "#565050",
        marginTop: 3
    },
    SendRequest: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14,
        color: "#1A1919",
    },
    peoplesImage: {
        height: 17,
        width: 19,
        marginRight: 2
    },
    Confirmation: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 11,
        lineHeight: 13,
        color: "#000000",
    },
    CancelRequest: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 11,
        lineHeight: 13,
        color: "#FF4545",
    },
    WaitingConfirmationImage: {
        height: 15,
        width: 15,
        marginRight: 6
    },
    LocationIcon: {
        width: 11,
        height: 15
    },
    NotificationIcon: {
        width: 17,
        height: 20
    },

  

  
})