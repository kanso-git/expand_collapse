import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

class ListItem extends PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.key);
  };
  render() {
    const { title } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View>
          <Text style={styles.item}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ListItem;
