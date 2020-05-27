import React from 'react';
import img from '../../../img/img.jpg';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import PersonalKais from './PersonalKais';
import PersonalLiked from './PersonalLiked';
import Media from './Media';
import ProfileModal from './ProfileModal';

function TopProfile() {
  return (
    <>
      <img src={img} className="top-img" alt="" />
      <div className="top-profile-container">
        <div className="top-profile-img-edit">
          <img src={img} className="profile-img" alt="" />
          <ProfileModal />
          {/* <button className="edit-button">
            <ProfileModal />
          </button> */}
        </div>
        <div className="profile-details">
          <h2 className="profile-user-name">Huzaifah</h2>
          <h3 className="profile-handle">@umfrumf</h3>
          <p className="bio">Lorem ipsum dolor sit.</p>
          <p className="date-joined">Joined December 2013</p>
          <div className="follower-count">
            <p className="profile-following">
              <span className="number">1333</span>Following
            </p>
            <p className="profile-followers">
              <span className="number">1000</span>Followers
            </p>
          </div>
        </div>
      </div>
      <div className="tabs">
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Kais</Tab>
            <Tab>Media</Tab>
            <Tab>Liked Kais</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <PersonalKais />
            </TabPanel>
            <TabPanel>
              <PersonalLiked />
            </TabPanel>
            <TabPanel>
              <Media />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}

export default TopProfile;
