import React from 'react';
import _ from 'lodash';

import getBodyParams from './schema2body';
import Parameter from './parameterItem';

const RequestBody = ({ paramArray, paramType }) => {
  let paramItems;

  if (_.has(paramArray[0], 'schema')) {
    paramItems = _.map(paramArray, (paramItem) => {
      const { name, required, description } = paramItem;
      return (
        <div className="paramBodyItem">
          <div className="paramName">
            {name}
            {required && <div className="paramRequired">required</div>}
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
