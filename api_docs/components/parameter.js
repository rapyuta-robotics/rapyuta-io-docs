import React, { Component } from 'react';
import _ from 'lodash';

const Parameter = ({ paramArray, paramType }) => {
  const paramItems = _.map(paramArray, (paramItem, idx) => (
    <div className="paramBodyItem" key={idx}>
      <div className="paramName">
        {paramItem.name}
        <div className="paramRequired">{paramItem.required ? 'required' : ''}</div>
      </div>
      <div className="paramType">
        {paramItem.type}
        <div className="paramDescription">{paramItem.description || ''}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <h3>{`${paramType} params`}</h3>
      <div className="paramBody">{paramItems}</div>
    </div>
  );
};

export default Parameter;
