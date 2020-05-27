import React from 'react';
import KaiCard from './KaiCard';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function DisplayKai({ kais, user }) {
  // console.log(user);
  return (
    <>
      {/* {kais &&
        kais.map((kai) => {
          return <KaiCard key={kai.id} kai={kai} />;
        })} */}
    </>
  );
}

const mapStateToProps = (state) => ({
  kais: state.firestore.ordered.kais,
  user: state.firestore.ordered.usersdet,
});

// const mapDispatchToProps = {

// }
// { collection: 'kais' }
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'users',
      doc: 'umfrumf',
      subcollections: [{ collection: 'userdetails' }],
      storeAs: 'usersdet',
    },
  ])
)(DisplayKai);
