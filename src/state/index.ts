import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';

import application from './application/reducer';
import { updateVersion } from './global/actions';
import user from './user/reducer';
import transactions from './transactions/reducer';
import swap from './swap/reducer';
import mint from './mint/reducer';
import lists from './lists/reducer';
import burn from './burn/reducer';
import multicall from './multicall/reducer';

const PERSISTED_KEYS: string[] = ['user', 'transactions', 'lists'];

// Check if the code is running on the client side
const isClient = typeof window !== 'undefined';

const store = configureStore({
  reducer: {
    application,
    user,
    transactions,
    swap,
    mint,
    burn,
    multicall,
    lists,
  },
  middleware: [
    ...getDefaultMiddleware({ immutableCheck: false, thunk: false, serializableCheck: false }),
    ...(isClient ? [save({ states: PERSISTED_KEYS })] : []),
  ],
  preloadedState: isClient ? load({ states: PERSISTED_KEYS }) : undefined,
});

store.dispatch(updateVersion());

export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
