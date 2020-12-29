import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
  counter: counterReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export const store = configureStore({
  reducer: rootReducer
});


export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
