// src/redux/store.js

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store); 

export { store, persistor }; 
