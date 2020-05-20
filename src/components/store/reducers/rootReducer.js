import { combineReducers } from 'redux';
import authReducer from './authReducer';
import kaiminReducer from './kaiminReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  auth: authReducer,
  kaimin: kaiminReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
