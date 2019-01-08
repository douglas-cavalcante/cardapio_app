import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/components/HomeScreen';
import ContactsScreen from './src/components/ContactsScreen';
import SchedulesScreen from './src/components/SchedulesScreen';
import AboutScreen from './src/components/AboutScreen';

const Navigation = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor, focused }) => {
        if (focused) {
          return (
            <Image source={require('./assets/images/home_azul.png')} style={styles.icon} />
          );
        } else {
          return (
            <Image source={require('./assets/images/home_preto.png')} style={styles.icon} />
          );
        }
      }
    },
  },
  Contato: {
    screen: ContactsScreen,
    navigationOptions: {
      tabBarLabel: "Contato",
    },
  },
  Horarios: {
    screen: SchedulesScreen,
    navigationOptions: {
      tabBarLabel: "Horários",
    },
  },
  Sobre: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: "Sobre",
    },
  }
}, {
    tabBarOptions: {
      //android
      showIcon: true,
    }
  });

const AppContainer = createAppContainer(Navigation);

export default AppContainer;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});
