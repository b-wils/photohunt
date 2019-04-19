import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import {HomeScreen, PhotoGridScreen} from './screens'

const AppNavigator = createStackNavigator({
	  Home: HomeScreen,
	  PhotoGrid: PhotoGridScreen
	},
	{
		initialRouteName: "Home"
	}

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
