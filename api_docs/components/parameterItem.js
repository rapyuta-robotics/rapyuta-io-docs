import React from 'react';
import _ from 'lodash';

const Parameter = ({ paramArray, paramType }) => {
  const paramItems = _.map(paramArray, (paramItem) => {
    const {
      name,
      required,
      type,
      description,
    } = paramItem;
    return (
      <div className="paramBodyItem" key={name}>
        <div className="paramName">
          {name}
          {
            required && (
              <div className="paramRequired">required</div>
            )
          }
        </div>
        <div className="paramType">
          {type}
          {
            description && (
              <div className="paramDescription">{description}</div>
            )
          }
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>{`${paramType} params`}</h3>
      <div className="paramBody">{paramItems}</div>
    </div>
  );
};

export default Parameter;
