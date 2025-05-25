import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todosReducer from './todoSlice';
import filterReducer from './filterSlice';

const persistedTodosReducer = persistReducer(
  {
    key: 'todos',
    storage,
    whitelist: ['items'],
  },
  todosReducer,
);

const persistedFilterReducer = persistReducer(
  {
    key: 'filter',
    storage,
    whitelist: ['name'],
  },
  filterReducer,
);

export const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
    filters: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
