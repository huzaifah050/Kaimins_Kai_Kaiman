import React from 'react';

function KaiCard({ kai }) {
  console.log(kai);
  return (
    <div className="kai-card">
      <div className="kai-card-flex">
        <div className="user-img-container">
          <div className="user-img"></div>
        </div>
        <div className="card-content">
          <h3>{kai.username}</h3>
          <h5>{'@' + kai.handle}</h5>
          <p>{kai.kai}</p>
        </div>
      </div>
    </div>
  );
}

export default KaiCard;
