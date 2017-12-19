/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from './ListItem';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

class LibraryList extends Component {
  componentWillMount() {
    // console.log(this.props.libraries);
  }
  renderRow = (item) => {
    console.log(JSON.stringify(item, null, 3));
    const lib = item.item;
     return (<Text style={styles.item}>{lib.title} </Text>);
   //   return ( <ListItem item={lib} />);
  }


  render() {
    return (
      <View style={styles.container} >
        <FlatList
            data= {this.props.libraries}
            renderItem= { this.renderRow }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  libraries: state.libraries,
});

export default connect(mapStateToProps)(LibraryList);
