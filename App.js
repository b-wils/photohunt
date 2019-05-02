import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore'

import {HomeScreen, PhotoGridScreen, PhotoViewScreen, CameraScreen, PhotoConfirmScreen} from './screens'

const AppNavigator = createStackNavigator({
	  Home: HomeScreen,
	  PhotoGrid: PhotoGridScreen,
    PhotoView: PhotoViewScreen,
    Camera: CameraScreen,
    PhotoConfirm: PhotoConfirmScreen
	},
	{
		initialRouteName: "Home"
	}

);

const AppContainer = createAppContainer(AppNavigator);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
    		<Provider store={store}>
    			<AppContainer />
    		</Provider>
    	)
  }
}
