

import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductItem from "./ProductItem";

export default class ProductsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: props.navigation.state.params.products,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,

  });

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          renderItem={({ item }) => <ProductItem data={item} />}
          keyExtractor={(item, _index) => item.name}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC"
  },
});
