import * as React from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Constants } from "expo";
import { keyframes, stagger } from "popmotion";
import { FontAwesome } from "@expo/vector-icons";

const COUNT = 5;
const DURATION = 4000;
const initialPhase = { scale: 0, opacity: 1 };
const constructAnimations = () =>
  [...Array(COUNT).keys()].map(() => initialPhase);

export default class PhoneAnimation extends React.Component {
  state = {
    animations: constructAnimations(),
    letAnimate: false,
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

    stagger(actions, DURATION / COUNT).start((animations) => {
      this.setState({ animations });
    });
  };
  handleButtonClick = () => {
    this.setState({ letAnimate: false });
  };

  render() {
    return (
      <>
        {this.state.letAnimate ? (
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

              <TouchableOpacity onPress={this.handleButtonClick}>
                <Text>kannya</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={{
              marginLeft:300,
              alignItems: "center",
              marginTop: 15,
              borderWidth: 1,
              width: 30,
            }}
            onPress={() =>
              this.setState({ letAnimate: !this.state.letAnimate })
            }
          >
            <Text>Click Me</Text>
          </TouchableOpacity>
        )}
      </>
    );
  }
}

const getCircle = (radius, backgroundColor = "gold") => ({
  backgroundColor,
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius,
  position: "absolute",
});

const styles = StyleSheet.create({
  icon: {
    color: "white",
    fontSize: 42,
    marginBottom: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  circle: getCircle(100),
  midCircle: {
    ...getCircle(75),
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 100,
    paddingVertical:100
  },
  circle3: {
    backgroundColor: "#000",
  },
});
