import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.productItem}>
        <Image resizeMode="contain" style={styles.productItemImage} source={this.props.data.img} />
        <Text style={styles.productName}>{this.props.data.name}</Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    height: 100,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  productItemImage: {
    width: 150,
    height: 80
  },
  productName: {
    fontSize: 16
  }
});
