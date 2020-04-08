import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import MainNav from './src/navigation/MainNavigator';
import mainReducer from './src/store/reducers';

const rootReducer = combineReducers({
  mainReducer: mainReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)} />
    )
  }

  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}
