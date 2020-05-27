export const sendKai = (newKai) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('kais')
      .add({
        ...newKai,
        username: ' Huzaifah',
        handle: 'umfrumf',
        createdAt: new Date(),
        likedTimes: 0,
        repliedTimes: 0,
      })
      .then(() => {
        const state = getState();
        // console.log(state.firebase.auth.uid);
        const uid = state.firebase.auth.uid;
        firestore.collection(`/users/${uid}/personalKais`).add({
          ...newKai,
          username: ' Huzaifah',
          handle: 'umfrumf',
          createdAt: new Date(),
          likedTimes: 0,
          repliedTimes: 0,
        });
      })
      .then(() => {
        dispatch({ type: 'ADD_KAI', payload: newKai });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_KAI_ERR', err: err.message });
      });
  };
};

export const uploadImg = (file) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // const firestore = getFirestore();
    const firebase = getFirebase();
    const { image } = file;
    // console.log(image.name);
    const storageRef = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    storageRef.on(
      'state_changed',
      (snapshot) => {
        //progress
      },
      (error) => {
        //error
        console.log(error);
      },
      () => {
        //completed
        firebase
          .storage()
          .ref(`images`)
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            dispatch({ type: 'IMAGE_UPLOADED', payload: url });
          });
      }
    );
  };
};
