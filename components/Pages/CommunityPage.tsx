
import React from 'react';
import CommunityHero from '../Sections/Community/CommunityHero';
import CommunityStats from '../Sections/Community/CommunityStats';
import ContributeSection from '../Sections/Community/ContributeSection';
import FeaturedProjects from '../Sections/Community/FeaturedProjects';
import DeveloperResources from '../Sections/Community/DeveloperResources';
import CommunityEvents from '../Sections/Community/CommunityEvents';
import CommunityChampions from '../Sections/Community/CommunityChampions';

const CommunityPage = () => {
  return (
    <>
      <CommunityHero />
      <CommunityStats />
      <ContributeSection />
      <FeaturedProjects />
      <DeveloperResources />
      <CommunityEvents />
      <CommunityChampions />
    </>
  );
};

export default CommunityPage;
