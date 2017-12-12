import React from 'react';
import Leftbar from './leftbar';
import PageContents from './pageContents';
import _ from 'lodash';
import SwaggerSnippet from 'swagger-snippet';

const RootComponent = ({ swaggerSpec, targets }) => {
  const formattedSpec = _.groupBy(SwaggerSnippet.getSwaggerSnippets(swaggerSpec, targets), item =>
    _.replace(item.url, `${swaggerSpec.schemes[0]}://${swaggerSpec.host}`, ''));

  return (
    <div>
      <div id="header">
        <div id="headerInner">
          <img id="headerLogo" src="/rr_logo.png" alt="Rapyuta robotics logo" />
        </div>
      </div>
      <div id="container">
        <div id="pageContainer">
          <div id="sidebar">
            <ul id="sidebarUl">
              <Leftbar spec={formattedSpec} swaggerSpec={swaggerSpec} />
            </ul>
          </div>
          <div id="pageContents">
            <div className="page-header">
              <h1>Rapyuta IO Core</h1>
            </div>
            <PageContents spec={formattedSpec} swaggerSpec={swaggerSpec} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootComponent;
