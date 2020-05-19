import React from 'react';
import { Divider } from '@chakra-ui/core';
import IconsPackage from './IconsPackage';
import ControlUser from './ControlUser';
import ControlKai from './ControlKai';

function ControlPanael() {
  return (
    <div className="control-board">
      <h3>Logo if Possible</h3>
      <Divider />
      <IconsPackage />
      <ControlKai />
      <ControlUser />
    </div>
  );
}

export default ControlPanael;
