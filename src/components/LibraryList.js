/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from './../actions';


const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 1,
  },
  item: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 18,
    height: 44,
  },
  description: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 18,
    height: 100,
  },
});

class LibraryList extends PureComponent {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
    onPrePressItem = id => () => this.onPressItem(id)

    onPressItem = (id) => {
      console.log('_onPressItem clicked id is ');
      this.props.select(id);
      console.log(`${id}`);
    }

    renderDescription = (key, description) => {
      console.log(`key is:${key} ,selection: ${this.props.selection} `);

      if (key === this.props.selection) {
        return (
          <CardSection>
            <Text >
              {description}
            </Text>
          </CardSection>
        );
      }
      return null;
    }
    renderItem = ({ item }) => (
      <TouchableWithoutFeedback onPress={this.onPrePressItem(item.key)}>
        <View>
          <CardSection>
            <Text style={styles.item}>
              {item.title}
            </Text>
          </CardSection>
          {this.renderDescription(item.key, item.description)}
        </View>
      </TouchableWithoutFeedback>
    );

    render() {
      console.log('render has been called');
      return (
        <View style={styles.listContainer}>
          <FlatList
            data={this.props.libraries}
            extraData={this.props.selection}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
}

const mapStateToProps = state => ({
  libraries: state.libraries,
  selection: state.selection,
});

export default connect(mapStateToProps, actions)(LibraryList);
