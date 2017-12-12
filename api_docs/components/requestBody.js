import React, { Component } from 'react';
import _ from 'lodash';

import Parameter from './parameter';

const schemaTypesToPlaceholder = {
  object: '{}',
  string: 'string',
  array: '[]',
  boolean: 'boolean',
  integer: 'integer',
};

export default class RequestBody extends Component {
  render() {
    const { paramArray, paramType } = this.props;
    let paramItems = [];

    if (_.has(paramArray[0], 'schema')) {
      _.each(paramArray, (paramItem) => {
        paramItems.push(<div className="paramBodyItem">
          <div className="paramName">
            {paramItem.name}
            <div className="paramRequired">{paramItem.required ? 'required' : ''}</div>
          </div>
          <div className="paramType">
              json
            <div className="paramDescription">
              {paramItem.description || ''}
              <br />
              <pre>
                <code>{JSON.stringify(getBodyParams(paramArray[0].schema), null, 2)}</code>
              </pre>
            </div>
          </div>
                        </div>);
      });
    } else {
      paramItems = <Parameter paramArray={paramArray} paramItem={paramItem} />;
    }

    return (
      <div>
        <h3>{`${paramType} params`}</h3>
        <div className="paramBody">{paramItems}</div>
      </div>
    );
  }
}

function getBodyParams(schemaProperties) {
  const params = {};

  if (_.has(schemaProperties, 'properties')) {
    _.each(schemaProperties.properties, (schemaItem, schemaIndex) => {
      if (schemaItem.type === 'array') {
        params[schemaIndex] = getBodyParams(schemaItem.items);
      } else if (schemaItem.type === 'object') {
        params[schemaIndex] = getBodyParams(schemaItem);
      } else {
        params[schemaIndex] = schemaTypesToPlaceholder[schemaItem.type];
      }
    });
  } else if (schemaProperties.type === 'array') {
    return [schemaTypesToPlaceholder[schemaProperties.items.type]];
  }
  return params;
}
