import React from 'react';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Outlet /> {/**this is the pages that will change */}
      {/* <Header />  this section is for navbar which can be bottom or top*/}
    </>
  );
};