

import React, { Component } from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import Item from "./Item";

export default class HomeListScreen extends Component {

  static navigationOptions = {
    title: "Restaurante SYNCRO",
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: 1,
          title: 'Prato Executivo',
          img: require('../../assets/images/tipos/pe.png'),
          description: 'Pratos já prontos para comer.',
          background: '#e35339',
          products: [
            { key: 1, name: 'Prato de Frango', img: require('../../assets/images/cardapio/pe/executivos_frang_.png') },
            { key: 2, name: 'Prato de Peixe', img: require('../../assets/images/cardapio/pe/executivos_peix_.png') },
            { key: 3, name: 'Prato de Picanha', img: require('../../assets/images/cardapio/pe/executivos_picanh_.png') }
          ]
        },
        {
          key: 2,
          title: 'Saladas',
          img: require('../../assets/images/tipos/saladas.png'),
          description: 'Pratos saudáveis para você.',
          background: '#a6bb24',
          products: [
            { key: 1, name: 'Salada de Frango', img: require('../../assets/images/cardapio/saladas/salada-fr.png') },
            { key: 2, name: 'Salada Agua Doce', img: require('../../assets/images/cardapio/saladas/salada_aguadoc_.png') },
            { key: 3, name: 'Sala Salmão', img: require('../../assets/images/cardapio/saladas/salada_salma.png') }
          ]
        },
        {
          key: 3,
          title: 'Bebidas',
          img: require('../../assets/images/tipos/bebidas.png'),
          description: 'Refrescos para você.',
          background: '#079ed4',
          products: [
            { key: 1, name: 'Caipirosca', img: require('../../assets/images/cardapio/bebidas/capirosc_3.png') },
            { key: 2, name: 'Cookie Cream', img: require('../../assets/images/cardapio/bebidas/cookies_crea.png') },
            { key: 3, name: 'Morango GD', img: require('../../assets/images/cardapio/bebidas/morango_gd.png') },
            { key: 4, name: 'Patra', img: require('../../assets/images/cardapio/bebidas/patra.png') },
            { key: 5, name: 'Suco Fitness', img: require('../../assets/images/cardapio/bebidas/suco_fitines_gd.png') }
          ]
        },
        {
          key: 4,
          title: 'Sobremesas',
          img: require('../../assets/images/tipos/sobremesa.png'),
          description: 'Sobremesas para você.',
          background: '#fcb81c',
          products: [
            { key: 1, name: 'Brownie', img: require('../../assets/images/cardapio/sobremesas/brownie_gd.png') },
            { key: 2, name: 'Creme papaya', img: require('../../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png') },
            { key: 3, name: 'Delicia Gelada', img: require('../../assets/images/cardapio/sobremesas/delicia_gelada_gd.png') }
          ]
        },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <Item data={item} navigation={this.props.navigation} />}
          keyExtractor={(item, _index) => item.key.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }
}) 
