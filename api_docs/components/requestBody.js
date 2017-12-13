import React from 'react';
import _ from 'lodash';

import Parameter from './parameterItem';

const schemaTypesToPlaceholder = {
  object: '{}',
  string: 'string',
  array: '[]',
  boolean: 'boolean',
  integer: 'integer',
};

const getBodyParams = (schemaProperties) => {
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
};

const RequestBody = ({ paramArray, paramType }) => {
  let paramItems;

  if (_.has(paramArray[0], 'schema')) {
    paramItems = _.map(paramArray, (paramItem) => {
      const {
        name,
        required,
        description,
      } = paramItem;
      return (
        <div className="paramBodyItem">
          <div className="paramName">
            {name}
            {
              required && (
                <div className="paramRequired">required</div>
              )
            }
          </div>
          <div className="paramType">
            json
            <div className="paramDescription">
              {description || ''}
              <br />
              <pre>
                <code>{JSON.stringify(getBodyParams(paramArray[0].schema), null, 2)}</code>
              </pre>
            </div>
          </div>
        </div>
      );
    });
  } else {
    paramItems = <Parameter paramArray={paramArray} paramType={paramType} />;
  }

  return paramItems;
};

export default RequestBody;
