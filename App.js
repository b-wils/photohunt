import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore'

import {HomeScreen, PhotoGridScreen, PhotoViewScreen, CameraScreen, PhotoConfirmScreen} from './screens'

// TODO we should find a way to move this out of our source, .env support is not as good on native
const navigationPersistenceKeyMod = '_1'
const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" + navigationPersistenceKeyMod: null;

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
    			<AppContainer persistenceKey={navigationPersistenceKey}/>
    		</Provider>
    	)
  }
}
