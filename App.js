import React from 'react';
import {StatusBar, View} from 'react-native';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import habitsReducer from './src/state/reducers/habits';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  habits: habitsReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
