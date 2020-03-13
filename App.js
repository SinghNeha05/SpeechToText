import React, { Component } from "react";
import { View, Button, Image } from "react-native";
import * as Speech from "expo-speech";

export default class SpeechText extends React.Component {
  state = {
    textSpeak:
      "React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components."
  };

  onSpeak = () => {
    console.log("abv");
    Speech.speak(this.state.textSpeak, {
      language: "en",
      pitch: 1,
      rate: 1
    });
  };

  render() {
    return (
      <View>
        <Image
          source={require("./assets/reactNativeLogo.jpg")}
          style={{ width: "auto", height: 400 }}
        />
        <Button
          title="React Native"
          onPress={this.onSpeak}
          style={{ paddingTop: 100 }}
        />
        <br />
      </View>
    );
  }
}
