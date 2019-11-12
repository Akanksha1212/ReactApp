import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { Video } from 'expo-av';

class SecondActivity extends React.Component {
  static navigationOptions = {
    title: "Second",
    headerStyle: {
      backgroundColor: "#73C6B6"
    }
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.headerText}>Here are some of the videos that you can watch</Text>
      <Text style={styles.headerText}>Big Buck Bunny</Text>
      <Video
      source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={{ width: 300, height: 300 }}
      />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});

export default SecondActivity;