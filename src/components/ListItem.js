import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default class ListItem extends Component {

  render() {
    const {title} = this.props.item;
    return (<Text style={styles.item}> {title}</Text>);
  }
};