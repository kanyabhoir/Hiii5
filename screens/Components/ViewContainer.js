import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StoryContainer, ProgressBar } from 'react-native-stories-view';

const ViewContainer = () => {
  return (
    //   <StoryContainer
    //   visible={true}
    //   enableProgress={true}
    //   images={["https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg","https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg"]}
    //   duration={20}
    //   onComplete={() => alert("onComplete")}
    //   containerStyle={{
    //     marginTop:100,
    //     width: '10%',
    //     height: '10%',
    //   }}
    // /> 
    // <StoryContainer
    //   visible={true}
    //   enableProgress={true}
    //   images={["https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg"]}
    //   duration={20}
    //   onComplete={() => alert("onComplete")}
    //   replyView={{
    //     isShowReply: true,
    //     onReplyTextChange: (textReply, progressIndex) => {
    //       console.log(`Text : ${textReply} , position : ${progressIndex}`);
    //     },
    //     onReplyButtonClick: (buttonType, progressIndex) => {
    //       switch (buttonType) {
    //         case 'send':
    //           console.log(`Send button tapped for position : ${progressIndex}`);
    //           break;

    //         case 'smiley':
    //           console.log(`Smiley button tapped for position : ${progressIndex}`);
    //           break;
    //       }
    //     },
    //   }}
    // />

    <StoryContainer
      visible={true}
      enableProgress={true}
      images={["https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292__480.jpg"]}

      duration={20}
      // onComplete={() => alert("onComplete")}
      userProfile={{
        // userImage: PROFILE,
        userName: 'Yuvraj Pandey',
        userMessage: 'Work hard & success will follow !!',
        // imageArrow: BACK,
        onImageClick: () => {
          console.log('lskndclksnc');
          Alert.alert('User profile image tapped');
        },
      }}
    />
  )
}

export default ViewContainer

const styles = StyleSheet.create({})