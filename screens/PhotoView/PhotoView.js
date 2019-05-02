import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import {getCurrentPhotoFromNav} from '../../redux/photos'

class PhotoViewScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Photo View - ' + navigation.getParam('photoid', 'Error'),
    }
  };

  render() {

    let photo = this.props.photo;

    return (
      <View>
        <Image source={photo.thumb} />
        <Button
          title="Take a Picture"
          onPress={() => this.props.navigation.navigate('Camera', {photoid: this.props.photo.id})}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

	return {
    photo: getCurrentPhotoFromNav(state, ownProps)
	}
}

var WrappedComponent = connect(mapStateToProps)(PhotoViewScreen)

export {WrappedComponent as PhotoViewScreen}