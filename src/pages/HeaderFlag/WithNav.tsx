import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';

export default () => {
  return (
    <>
      <Outlet /> {/**this is the pages that will change */}
      {/* <Header /> */}
      <Navbar/>
    </>
  );
};