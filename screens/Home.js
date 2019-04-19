import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to PhotoGrid"
          onPress={() => this.props.navigation.navigate('PhotoGrid')}
        />
      </View>
    );
  }
}