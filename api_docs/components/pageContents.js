import React, { Component } from 'react';
import _ from 'lodash';
import Prism from 'prismjs';

import Parameter from './parameter';
import RequestBody from './requestBody';
import ResponseBody from './responseBody';

const Contents = ({ spec, swaggerSpec }) => {
  const pageContents = _.map(spec, (resultSpecItem, specKey) =>
    _.map(resultSpecItem, (resultItem) => {
      const {
        method, description, url, snippets,
      } = resultItem;
      const params = _.groupBy(swaggerSpec.paths[specKey][method.toLowerCase()].parameters, 'in');

      return (
        <div className="apiItem" id={`${method}_${specKey}`}>
          <h3 className="apiItemHead">
            <span className={`methodSpan ${method.toLowerCase()}`}>{method}</span>
            {specKey}
          </h3>

          <p className="apiDetails">
            {_.replace(url, `${swaggerSpec.schemes[0]}://${swaggerSpec.host}`, '<HOST><PORT>')}
            <br />
            {description}
          </p>

          <p>
            {_.has(params, 'path') ? <Parameter paramArray={params.path} paramType="Path" /> : null}
            {_.has(params, 'query') ? (
              <Parameter paramArray={params.query} paramType="Query" />
            ) : null}
            {_.has(params, 'body') ? (
              <RequestBody paramArray={params.body} paramType="Body" />
            ) : null}
            {
              <ResponseBody
                responses={swaggerSpec.paths[specKey][method.toLowerCase()].responses}
              />
            }
          </p>

          <div className="apiCodeEmbed">
            <ul>
              {_.map(
                {
                  bash: 'Shell',
                  go: 'Go',
                  python: 'Python',
                  clike: 'C',
                  javascript: 'Javascript',
                },
                (lang, idx, obj) => {
                  const keys = Object.keys(obj);
                  return (
                    <li className="tabHeaderItem active" data-id={`${keys.indexOf(idx)}`}>
                      {lang}
                    </li>
                  );
                },
              )}
            </ul>

            <div>
              {_.map(
                {
                  bash: 'Shell',
                  go: 'Go',
                  python: 'Python',
                  clike: 'C',
                  javascript: 'Javascript',
                },
                (lang, idx, obj) => {
                  const keys = Object.keys(obj);
                  return (
                    <div className={`tabContentItem ${keys.indexOf(idx) === 0 ? 'active' : ''}`}>
                      <pre>
                        <code>
                          {_.replace(
                            Prism.highlight(
                              decodeURIComponent(snippets[keys.indexOf(idx)].content),
                              Prism.languages[idx],
                            ),
                            'undefinedundefined',
                            '&lt;HOST&gt;:&lt;PORT&gt;',
                          )}
                        </code>
                      </pre>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      );
    }));

  return <p>{pageContents}</p>;
};

export default Contents;
