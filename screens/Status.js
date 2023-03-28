import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { PostUploadHandle } from '../redux/Action';
import * as ImagePicker from 'expo-image-picker';
import { StoryContainer, ProgressBar } from 'react-native-stories-view';
import { useNavigation } from '@react-navigation/native';

const Status = () => {
  const navigation = useNavigation();

  const data = [
    { name: "Doe", uri: require("../assets/Images/person4.jpeg"), Status: "yesterday, 10:38 PM" },
    { name: "Victor", uri: require("../assets/Images/Anime.jpg"), Status: "yesterday, 9:46 AM" },
    { name: "Jane Doe", uri: require("../assets/Images/Person7.jpeg"), Status: "yesterday,7:17PM" },
    { name: "Alisa", uri: require("../assets/Images/Person7.jpeg"), Status: "yesterday,5:27PM" },
    { name: "Jon", uri: require("../assets/Images/Person7.jpeg"), Status: "yesterday,7:17PM" },
  ];
  const recentdata = [
    { name: "Doe", uri: require("../assets/Images/person4.jpeg"), Status: "Just Now" },
    { name: "Jane Doe", uri: require("../assets/Images/Person7.jpeg"), Status: "12 minutes ago" },
    { name: "Victor", uri: require("../assets/Images/Anime.jpg"), Status: "32 minutes ago" },
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
    <ScrollView>
      <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} />
      <View style={styles.uploadContainer}>
        <View>
          <TouchableOpacity onPress={() => pickImage()} style={styles.innerContainer}>
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
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              source={require("../assets/add.png")}
            />
          </View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '700', fontSize: 19 }}>My Status</Text>
          </View>
          <View><Text>Tap to add status update</Text></View>
        </View>
      </View>
  
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
        <Text style={styles.updatetxt}>
          Recent updates
        </Text>
      </View>
      {recentdata.map((recentdata) => {
        return (
          <>
            <TouchableOpacity onPress={() => navigation.navigate("viewcontainer")}
              style={styles.userinfoContainer}>
              <View>
                <Image style={styles.userimg} source={recentdata.uri} />
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.nametxt}>{recentdata.name}</Text>
                <Text style={styles.statuestxt}>{recentdata.Status}</Text>
              </View>
            </TouchableOpacity>
            {/* <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} /> */}
          </>
        )
      })}

      <View style={{ marginLeft: 20 }}>
        <Text style={styles.updatetxt}>
          Viewed updates
        </Text>
      </View>
      {data.map((data) => {
        return (
          <>
            <TouchableOpacity
              style={styles.userinfoContainer}>
              <TouchableOpacity onPress={() => viewStoryes()}>
                <Image style={styles.userimg} source={data.uri} />
              </TouchableOpacity>
              <View style={styles.nameContainer}>
                <Text style={styles.nametxt}>{data.name}</Text>
                <Text style={styles.statuestxt}>{data.Status}</Text>
              </View>
            </TouchableOpacity>
            {/* <View style={{ borderWidth: 1, borderColor: "#8b8c8b" }} /> */}
          </>
        )
      })}

    </ScrollView>
  )
}

export default Status

const styles = StyleSheet.create({
  uploadContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  innerContainer: {
    borderWidth: 2,
    borderRadius: 100,
    width: 70, height: 70,
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderWidth: 1, width: 20,
    height: 20, borderRadius: 100,
    marginLeft: 50, marginTop: -23
  },
  img: {
    border: 1,
    width: 15,
    height: 15,
    marginLeft: 2,
    marginTop: 2
  },
  updatetxt: {
    fontFamily: "Lato",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
    color: "#c8c8c8"
  },
  userinfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  userimg: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 30
  },
  nameContainer: {
    marginLeft: 12,
    alignItems: "flex-start"
  },
  nametxt: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontSize: 15,
    fontWeight: "700"
  },
  statuestxt: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontSize: 13,
    fontWeight: "600"
  },
})