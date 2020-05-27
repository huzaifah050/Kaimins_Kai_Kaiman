import React from 'react';
import ControlPanael from '../control-panel/ControlPanael';
import Explore from '../explore/Explore';
import ProfileContent from './ProfileContent';

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="control-panel">
          <ControlPanael />
        </div>
        <div className="home">
          <ProfileContent />
        </div>
        <div className="explore">
          <Explore />
        </div>
      </div>
    </div>
  );
}

export default Profile;
