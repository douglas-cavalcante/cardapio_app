import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AsyncImage from "./AsyncImage";

export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnLoad = () => {
    console.log("terminou");

  }

  render() {
    return (
      <View style={styles.productItem}>
        <View style={{marginRight: 5}}>
          <AsyncImage
            style={styles.productItemImage}
            source={this.props.data.img}
            placeholderColor='#D3D3D3' />
        </View>
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
    height: 80,
    borderRadius: 50
  },
  productName: {
    fontSize: 16
  }
});
