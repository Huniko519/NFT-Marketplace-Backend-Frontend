import React from 'react';
import Landing from './landing';
import Collections from './collections';
import NftLists from './nftLists';
import GetStarted from './getStarted';
import Categories from './categories';

const Home = () => {
  return (
    <>
      <Landing />
      <NftLists />
      <Collections />
      <Categories />
      <GetStarted />
    </>
  );
};
export default Home;
