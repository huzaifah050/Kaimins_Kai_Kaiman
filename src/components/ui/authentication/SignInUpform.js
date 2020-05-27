import React from 'react';
import { Box, Tab, TabList, Tabs, TabPanel, TabPanels } from '@chakra-ui/core';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function SignInform() {
  return (
    <div>
      <Box w="350px" bg="gray.200" p={4} boxShadow="sm" rounded="lg" mx="auto">
        <Tabs variant="enclosed" isFitted m={4}>
          <TabList>
            <Tab>Sign In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels mt={4}>
            <TabPanel>
              <SignInForm />
            </TabPanel>
            <TabPanel>
              <SignUpForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default SignInform;
