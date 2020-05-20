import { combineReducers } from 'redux';
import authReducer from './authReducer';
import kaiminReducer from './kaiminReducer';
import { firebaseReducer, firestoreReducer } from 'react-redux-firebase';

export default combineReducers({
  auth: authReducer,
  kaimin: kaiminReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
