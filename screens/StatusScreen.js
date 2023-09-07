import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { PostUploadHandle } from '../redux/Action';
import * as ImagePicker from 'expo-image-picker';
import { StoryContainer, ProgressBar } from 'react-native-stories-view';

const StatusScreen = ({ navigation }) => {

  const data = [
    { name: "Jane Doe", uri: require("../assets/Images/Person7.jpeg"), time: "12.09 pm" },
    { name: " Doe", uri: require("../assets/Images/person4.jpeg"), time: "12.09 pm" },
    { name: "Victor", uri: require("../assets/Images/Anime.jpg"), time: "12.09 pm" },

  ];

  const { control, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [image, setImage] = useState([]);
  const dispatch = useDispatch();

  const LoggedUser = useSelector((state) => state.UserReducer.registeredUser);
  // console.log(LoggedUser);

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

  const viewStoryes = () => {
    navigation.navigate("storyContainer")
  }

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
        <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 20
          }}>

          <View>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                borderWidth: 2,
                borderRadius: 100,
                width: 70, height: 70,
              }}>
              {image.map((item, i) => {
                return (
                  <Image
                    key={i}
                    source={{ uri: item.uri }}
                    style={{ width: 66, height: 66, borderRadius: 100 }}
                  />
                )
              })}
            </TouchableOpacity>
            <View style={{
              backgroundColor: "#fff",
              borderWidth: 1, width: 20,
              height: 20, borderRadius: 100,
              marginLeft: 50, marginTop: -23
            }}>
              <Image
                style={{ border: 1, width: 15, height: 15, marginLeft: 2, marginTop: 2 }}
                source={require("../assets/add.png")}
              />
            </View>
          </View>
          <View style={{ marginLeft: 10 }}>
            <View style={{ marginTop: 10 }}><Text style={{ fontWeight: '700', fontSize: 19 }}>My Status</Text></View>
            <View><Text>Tap to add status update</Text></View>
          </View>
        </View>
        {/* <View style={{borderWidth:1, borderRadius:120,height:100}}>

        <ProgressBar
        style={{borderWidth:1,}}
          images={["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"]}
          onChange={() => { }}
          progressIndex={0}
          enableProgress={true}
          duration={20}
          barStyle={{
            // barActiveColor: BAR_ACTIVE_COLOR,
            // barInActiveColor: BAR_INACTIVE_COLOR,
            barWidth: 50,
            barHeight: 4
          }}
        />
        </View> */}
        {/* <StoryContainer
          visible={true}
          enableProgress={true}
          images={["https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"]}
          duration={20}
          onComplete={() => alert("onComplete")}
          containerStyle={{
            width: '100%',
            height: '100%',
          }}
        /> */}

        {/* <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} /> */}
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontFamily: "Lato", fontSize: 15, fontStyle: "normal", fontWeight: "700", color: "#c8c8c8" }}>
            Viewed updates
          </Text>
        </View>
        {data.map(() => {
          return (
            <>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingVertical: 10,
                  paddingHorizontal: 20
                }}>
                <TouchableOpacity onPress={() => viewStoryes()}>
                  <Image style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 30
                  }} source={require("../assets/Images/person1.jpg")} />
                </TouchableOpacity>
                <View style={{
                  marginLeft: 20,
                  alignItems: 'center',
                  marginTop: 15
                }}><Text>Person 1</Text></View>
              </View>
              <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} />
            </>
          )
        })}

        {/* <View
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
            }} source={require("../assets/Images/Anime.jpg")} />
          </View>
          <View style={{
            marginLeft: 20,
            alignItems: 'center',
            marginTop: 15
          }}><Text>Person 3</Text></View>
        </View> */}
      </ScrollView>
    </View>
  )
}

export default StatusScreen

const styles = StyleSheet.create({})