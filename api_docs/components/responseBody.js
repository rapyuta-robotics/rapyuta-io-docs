import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import getBodyParams from './schema2body';

const ResponseBody = ({ responses, definitions }) => {
  const responsesArray = _.map(responses, (response, code) => ({
    response,
    code,
  }));

  return (
    <div className="apiCodeEmbed">
      <ul>
        {_.map(responsesArray, ({ code, response: { description } }, index) => (
          <li
            className={classnames({
              tabHeaderItem: true,
              active: index === 0,
            })}
            key={code}
            data-id={index}
          >
            {code}
            {description && ` (${description})`}
          </li>
        ))}
      </ul>

      <div>
        {
          _.map(responsesArray, (
            {
              response: {
                schema,
              },
              code,
            },
            index,
          ) => (
            <div
              className={classnames({
                tabContentItem: true,
                active: index === 0,
              })}
              key={code}
            >
              <pre>
                <code>
                  {schema ? (
                    JSON.stringify(getBodyParams(schema, definitions), null, 2)
                  ) : (
                    <i>Empty response body</i>
                  )}
                </code>
              </pre>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ResponseBody;
