import React from 'react';
import { Link } from 'react-router-dom';

function IconsPackage() {
  return (
    <>
      <div className="icon-package">
        <Link to="/">
          <div className="homee icons">
            <div className="icon">
              <i className="fas fa-house-user"></i>
            </div>

            <h3>Home</h3>
          </div>
        </Link>
        <Link to="/profile">
          <div className="profile icons">
            <div className="icon">
              <i className="far fa-user"></i>
            </div>
            <h3>Profile</h3>
          </div>
        </Link>
        <div className="notification icons">
          <div className="icon">
            <i className="far fa-bell"></i>
          </div>
          <h3>Notification</h3>
        </div>
        <div className="bookmark icons">
          <div className="icon">
            <i className="far fa-bookmark"></i>
          </div>
          <h3>Bookmark</h3>
        </div>
      </div>
    </>
  );
}

export default IconsPackage;
