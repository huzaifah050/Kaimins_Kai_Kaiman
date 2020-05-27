import React from 'react';
import { Link } from 'react-router-dom';


function HomeLogo({ signOut }) {
  return (
    <div className="home-logo">
      <h2>Home</h2>
      <Link to="/signin">Signin</Link>
     
    </div>
  );
}



export default HomeLogo;
