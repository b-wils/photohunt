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
      <ScrollView>
        <PhotoView>
          <Text> Original </Text>
          <TargetPhoto source={photo.thumb} />
          <Text> Yours </Text>
          <UserPhoto source={{uri: userPhoto.uri}} />
          <Button
            title="Confirm"
            onPress={() => {
              this.props.dispatch(setUserPhoto(userPhoto, photo.id))
              this.props.navigation.navigate('PhotoGrid')
            }}
          />
        </PhotoView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

	return {
    photo: getCurrentPhotoFromNav(state, ownProps)
	}
}

const PhotoView = styled.View `
  padding: 8px;
  flex: 1;
  align-items: center;

`

const TargetPhoto = styled.Image `
  width: 75%;
  height: undefined;
  aspect-ratio: 1.5;
  margin: 4px;
`

const UserPhoto = styled.Image `
  width: 75%;
  height: undefined;
  aspect-ratio: 1.5;
  margin: 4px;
`

var WrappedComponent = connect(mapStateToProps)(PhotoConfirmScreen)

export {WrappedComponent as PhotoConfirmScreen}