import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import {getPhotoList} from '../../redux/photos'

class PhotoGridScreen extends React.Component {

  static navigationOptions = {
    title: 'Photo List',
  };

  render() {

    return (
      <View>
        <ScrollView>
          <PhotoList>
            {this.props.photos.map((item,i) => 

              <PhotoContainer key={i}  onPress={() => this.props.navigation.navigate('PhotoView', {id:item.id})}>
                <View>
                  <PhotoBuffer />

                  <Photo source={item.thumb}/>
                  <PhotoTitle> {item.id}</PhotoTitle>
                </View>
              </PhotoContainer>

            )}

          </PhotoList>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {

	return {
    photos: getPhotoList(state)
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

const PhotoContainer = styled.TouchableOpacity `
  padding: 2px;
  height: auto;
  width: 33%;
  position: relative;
`

const PhotoBuffer = styled.View `
    padding-top:100%;
`

const PhotoTitle = styled.Text `
  position: absolute;
  color: white;
`

var WrappedComponent = connect(mapStateToProps)(PhotoGridScreen)

export {WrappedComponent as PhotoGridScreen}