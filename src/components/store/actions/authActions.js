export const signIn = (userCred) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(userCred.email, userCred.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_FAIL', payload: err.message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const signUp = (userCred) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(userCred.emailup, userCred.passwordup)
      .then((res) => {
        console.log(res.user.uid);
        return firestore
          .collection(`/users/${res.user.uid}/userdetails`)
          .doc(res.user.uid)
          .set({
            name: userCred.name,
            username: userCred.username,
            dateJoined: new Date(),
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_FAIL', payload: err.message });
      });
  };
};
