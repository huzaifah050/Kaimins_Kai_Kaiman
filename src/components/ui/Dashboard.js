import React from 'react';
import ControlPanael from './control-panel/ControlPanael';
import Home from './home/Home';
import Explore from './explore/Explore';

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="control-panel">
          <ControlPanael />
        </div>
        <div className="home">
          <Home />
        </div>
        <div className="explore">
          <Explore />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
