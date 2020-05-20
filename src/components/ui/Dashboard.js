import React from 'react';
import ControlPanael from './control-panel/ControlPanael';
import Home from './home/Home';

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
        <div className="explore"></div>
      </div>
    </div>
  );
}

export default Dashboard;
