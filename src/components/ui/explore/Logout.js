import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function Logout({ signOut }) {
  return <button onClick={signOut}>Logout</button>;
}

const mapDispatchToProps = {
  signOut,
};

export default connect(null, mapDispatchToProps)(Logout);
