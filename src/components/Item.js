import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableHighlight, Text } from "react-native";

export default class Item extends Component {

  constructor(props) {
    super(props);
  }

  handleOnPress = () => {
    const { title, products } = this.props.data;
    this.props.navigation.navigate("Products", { title, products });
  }

  render() {
    return (
      <TouchableHighlight underlayColor={"#CCC"} onPress={this.handleOnPress}>
        <View style={[styles.item, { backgroundColor: this.props.data.background }]}>
          <Image source={this.props.data.img} style={styles.image} />
          <View>
            <Text style={styles.title}>{this.props.data.title}</Text>
            <Text style={styles.description} >{this.props.data.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    height: 100,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    height: 64,
    width: 64,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold"
  },
  description: {
    color: "#FFFFFF",
    fontSize: 16
  }
})

