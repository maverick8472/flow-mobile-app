import React from 'react';
import {StatusBar, View} from 'react-native';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import habitsReducer from './src/state/reducers/habits';

const rootReducer = combineReducers({
  habits: habitsReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
