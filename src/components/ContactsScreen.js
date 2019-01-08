import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default class ContactsScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return <Image source={require("../../assets/images/contato_azul.png")} style={styles.icon} />
      } else {
        return <Image source={require("../../assets/images/contato_preto.png")} style={styles.icon} />
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sou apenas um cotnato</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});