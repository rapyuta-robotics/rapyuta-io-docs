import React, { Component } from 'react';
import _ from 'lodash';

const Leftbar = ({ spec, swaggerSpec }) => {
  const sidebarArray = _.map(spec, (resultSpecItem, specKey) =>
    _.map(resultSpecItem, ({ method }, idx) => {
      const params = _.groupBy(swaggerSpec.paths[specKey][method.toLowerCase()].parameters, 'in');

      return (
        <li key={`${specKey}_${idx}`}>
          <a href={`#${method}_${specKey}`}>
            <span className={`methodSpan ${method.toLowerCase()}`}>{method}</span>
            {specKey}
          </a>
        </li>
      );
    }));

  return <p>{sidebarArray}</p>;
};

export default Leftbar;
