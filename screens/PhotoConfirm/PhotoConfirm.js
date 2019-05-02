import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import {getCurrentPhotoFromNav, setUserPhoto} from '../../redux/photos'

class PhotoConfirmScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Photo Confirm View - ' + navigation.getParam('photoid', 'Temp2'),
    }
  };

  render() {

    let userPhoto = this.props.navigation.getParam('photo', null);
    let photo = this.props.photo;
    return (
      <View>
        <Text> Original </Text>
        <Image source={photo.thumb} />
        <Text> Yours </Text>
        <Image source={{uri: userPhoto.uri}} style={{width: 200, height: 200}}/>
        <Button
          title="Confirm"
          onPress={() => {
            this.props.dispatch(setUserPhoto(userPhoto, photo.id))
            this.props.navigation.navigate('PhotoGrid')
          }}
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

const PhotoList = styled.View `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Photo = styled.Image `
  width: 100%;
  height: 100%;
  position: absolute;
`

const PhotoContainer = styled.View `
  padding: 2px;
  height: auto;
  width: 33%;
  position: relative;
`

const PhotoBuffer = styled.View `
    padding-top:100%;
`

var WrappedComponent = connect(mapStateToProps)(PhotoConfirmScreen)

export {WrappedComponent as PhotoConfirmScreen}