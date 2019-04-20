import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class PhotoGridScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Photo Screen {this.props.value}!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		value: state.photos[0].title
	}
}

var WrappedComponent = connect(mapStateToProps)(PhotoGridScreen)

export {WrappedComponent as PhotoGridScreen}