import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeListScreen from "./HomeListScreen";
import ProductsScreen from "./ProductsScreen";

const Navigation = createStackNavigator({
  HomeList: {
    screen: HomeListScreen,
  },
  Products: {
    screen: ProductsScreen
  }
});

export default Navigation;

