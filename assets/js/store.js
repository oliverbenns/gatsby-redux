import { createStore } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  undefined,
  autoRehydrate(),
);

const config = {
  whitelist: ['customer'],
  storage: asyncSessionStorage,
};

persistStore(store, config);

export default store;
