import React, { Component } from 'react';
import _ from 'lodash';

export default class Parameter extends Component {
  render() {
    const { paramArray, paramType } = this.props;
    const paramItems = [];

    _.each(paramArray, (paramItem) => {
      paramItems.push(<div className="paramBodyItem">
        <div className="paramName">
          {paramItem.name}
          <div className="paramRequired">{paramItem.required ? 'required' : ''}</div>
        </div>
        <div className="paramType">
          {paramItem.type}
          <div className="paramDescription">{paramItem.description || ''}</div>
        </div>
                      </div>);
    });

    return (
      <div>
        <h3>{`${paramType} params`}</h3>
        <div className="paramBody">{paramItems}</div>
      </div>
    );
  }
}
