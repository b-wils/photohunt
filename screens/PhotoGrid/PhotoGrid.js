import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

class PhotoGridScreen extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <PhotoList>
            {this.props.photos.map((item,i) => 
              <PhotoContainer key={i}>
                <PhotoBuffer />
                <Photo source={require('./150.png')}/>
              </PhotoContainer>
            )}

          </PhotoList>
          <PhotoListSpacer />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		value: state.photos[0].title,
    photos: state.photos
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

var WrappedComponent = connect(mapStateToProps)(PhotoGridScreen)

export {WrappedComponent as PhotoGridScreen}