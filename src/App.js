import React from 'react';
import Root from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
// import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunkMiddleware]
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
