import React from 'react';
import {Text, YellowBox} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AppNavigationContainer from './src/navigations';
import rootReducer from './src/store/reducers';

// This is for performance to enable react navigation
// to use native screens rather than rather than JS...
enableScreens();

// import thunk from 'redux-thunk';

// const middleware = [thunk];
const middleware: any = [];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers =
  // @ts-ignore
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware)),
);
const persistedStore = persistStore(store);

const App: React.FC = () => {
  //ignoring an unnecessary componentWillReceiveProps warning caused from react-navigation
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <>
            <Text>Loading</Text>
          </>
        }
        persistor={persistedStore}
      >
        <SafeAreaProvider>
          <AppNavigationContainer />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
