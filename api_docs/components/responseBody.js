import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

const ResponseBody = ({ responses }) => {
  const responsesArray = _.map(responses, (response, code) => ({
    response,
    code,
  }));

  return (
    <div className="apiCodeEmbed">
      <ul>
        {
          _.map(responsesArray, ({
            code,
            response: {
              description,
            },
          }, index) => (
            <li
              className={classnames({
                tabHeaderItem: true,
                active: (index === 0),
              })}
              data-id={index}
            >
              {code}{description && (` (${description})`)}
            </li>
          ))
        }
      </ul>

      <div>
        {
          _.map(responsesArray, ({
            response: {
              schema,
            },
          }, index) => (
            <div
              className={classnames({
                tabContentItem: true,
                active: (index === 0),
              })}
            >
              <pre>
                <code>
                  {
                    schema ?
                      JSON.stringify(schema, null, 2) :
                      <i>Empty response body</i>
                  }
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
