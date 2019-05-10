import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button
} from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";

import { getCurrentPhotoFromNav } from "../../redux/photos";

class PhotoViewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Photo View - " + navigation.getParam("photoid", "Error")
    };
  };

  render() {
    let photo = this.props.photo;

    return (
      <ScrollView>
        <PhotoView>
          <Photo source={photo.thumb} />
          {photo.userPhoto && <Photo source={{ uri: photo.userPhoto.uri }} />}
          <CameraButton
            title="Take a Picture "
            onPress={() =>
              this.props.navigation.navigate("Camera", {
                photoid: this.props.photo.id
              })
            }
          />
        </PhotoView>
      </ScrollView>
    );
  }
}

const PhotoView = styled.View`
  padding: 8px;
  flex: 1;
  align-items: center;
`;

const Photo = styled.Image`
  width: 75%;
  margin-bottom: 8px;
  height: undefined;
  aspect-ratio: 1.5;
`;

const CameraButton = styled.Button`
  width: 100px;
`;

const mapStateToProps = (state, ownProps) => {
  return {
    photo: getCurrentPhotoFromNav(state, ownProps)
  };
};

var WrappedComponent = connect(mapStateToProps)(PhotoViewScreen);

export { WrappedComponent as PhotoViewScreen };
