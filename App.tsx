import React from 'react';
import {YellowBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';

import AppNavigationContainer from './src/screens';
import rootReducer from './src/store/reducers';

// import thunk from 'redux-thunk';

// const middleware = [thunk];
const middleware = [];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware)),
);

const App: React.FC = () => {
  //ignoring an unnecessary warning caused from react-navigation
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
  console.log(store.getState());

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigationContainer />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
