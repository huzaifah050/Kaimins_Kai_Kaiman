import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/core';
import ControlPanael from './ControlPanael';

function Dashboard() {
  return (
    <div className="container">
      <SimpleGrid columns={3} spacing={4} height="auto">
        <div className="control-panel">
          <ControlPanael />
        </div>
        <div className="home">
          <Box bg="tomato" height="80px"></Box>
        </div>
        <div className="explore">
          <Box bg="tomato" height="80px"></Box>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default Dashboard;
