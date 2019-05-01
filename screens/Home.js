import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScreenOrientation } from 'expo';

export class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    // TODO in theory this can be configued in app.json
    // May want a declarative way to set this if we need to change often
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL);
  }

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