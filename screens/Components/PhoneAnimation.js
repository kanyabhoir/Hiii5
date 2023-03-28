import * as React from 'react';
import { Animated, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { keyframes, stagger } from 'popmotion';
import { FontAwesome } from '@expo/vector-icons';
import Call from "react-native-vector-icons/MaterialIcons";

const COUNT = 5;
const DURATION = 4000;
const initialPhase = { scale: 0, opacity: 1 };
const data = [
  { name: "John (info tech)", time: "9.57 pm", userMessage: "talk to you latter" },
  { name: "John Doe", time: "7.09 pm", userMessage: "hey!" },
  { name: "Victor Wayne", time: "7.49 pm", userMessage: "okay" },
  { name: "Jane Doe", time: "7.36 pm", userMessage: "So many books, so little time." },
  { name: " Doe", time: "5.34 pm", userMessage: "let it be" },


];
const constructAnimations = () =>

  [...Array(COUNT).keys()].map(() => initialPhase);

export default class PhoneAnimation extends React.Component {
  state = {
    animations: constructAnimations(),
    letAnimate: false
  };

  componentDidMount() {
    this.animateCircles();
  }

  animateCircles = () => {
    const actions = Array(COUNT).fill(
      keyframes({
        values: [initialPhase, { scale: 2, opacity: 0 }],
        duration: DURATION,
        loop: Infinity,
        yoyo: Infinity,
      })
    );

    stagger(actions, DURATION / COUNT).start(animations => {
      this.setState({ animations });
    });

  };
  handleButtonClick = () => {
    this.setState({ letAnimate: false });
  }


  render() {
    return (
      <>
        {this.state.letAnimate ?
          <View style={styles.container}>
            {this.state.animations.map(({ opacity, scale }, index) => {
              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.circle,
                    {
                      transform: [{ scale }],
                      opacity,
                    },
                  ]}
                />
              );
            })}
            <View style={styles.midCircle}>
              <FontAwesome name="phone" style={styles.icon} />
              <Text style={styles.text}>Calling...</Text>
            </View>
          </View>

          : <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.setState({ letAnimate: !this.state.letAnimate })}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

              <View style={{ flexDirection: "row" }}>
                <Image style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30
                }}
                  source={require("../../assets/Images/Anime.jpg")}
                />

                <View style={{ marginTop: 5, marginLeft: 15 }}>
                  <Text style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontSize: 15,
                    fontWeight: "700"
                  }}>kannya</Text>
                  <Text style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontSize: 15,
                    fontWeight: "600"
                  }}>(2) 47 minutes ago</Text>
                </View>
              </View>
              <Call name='call' style={{ marginTop: 12 }} color={"#2c731d"} size={30} />
            </View>
          </TouchableOpacity>}


        <TouchableOpacity style={{ marginTop: 300, alignItems: "center" }} onPress={this.handleButtonClick} >
          <Call color={"red"} name='call' size={50} />
        </TouchableOpacity>
      </>

    );
  }
}

const getCircle = (radius, backgroundColor = 'gold') => ({
  backgroundColor,
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius,
  position: 'absolute',
});

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    fontSize: 42,
    marginBottom: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  circle: getCircle(100),
  midCircle: {
    ...getCircle(75),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 200
  },
  circle3: {
    backgroundColor: "#000"
  }
});