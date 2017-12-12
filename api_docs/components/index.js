import React from 'react';
import Leftbar from './leftbar';
import PageContents from './pageContents';

const RootComponent = ({
  testProps,
}) => (
  <div>
    <div id="header">
      <div id="headerInner">
        <img
          id="headerLogo"
          src="/rr_logo.png"
          alt="Rapyuta robotics logo"
        />
      </div>
    </div>
    <div id="container">
      <div id="pageContainer">
        <div id="sidebar">
          <ul id="sidebarUl">
            <Leftbar />
          </ul>
        </div>
        <div id="pageContents">
          <div className="page-header">
            <h1>Rapyuta IO Core</h1>
          </div>
          <PageContents content={testProps} />
        </div>
      </div>
    </div>
  </div>
);

export default RootComponent;
