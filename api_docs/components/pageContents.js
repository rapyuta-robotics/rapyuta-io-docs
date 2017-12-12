import React, { Component } from 'react';
import _ from 'lodash';

import Parameter from './parameter';
import RequestBody from './requestBody';
import ResponseBody from './responseBody';

export default class Contents extends Component {
  render() {
    const { spec, swaggerSpec } = this.props;
    const pageContents = [];

    _.each(spec, (resultSpecItem, specKey) => {
      _.each(resultSpecItem, (resultItem) => {
        const {
          method, description, url, snippets,
        } = resultItem;
        const params = _.groupBy(swaggerSpec.paths[specKey][method.toLowerCase()].parameters, 'in');

        pageContents.push(<div className="apiItem" id={`${method}_${specKey}`}>
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
            {_.has(params, 'path') ? (
              <Parameter paramArray={params.path} paramType="Path" />
              ) : null}
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
              <li className="tabHeaderItem active" data-id="0">
                  Shell
              </li>
              <li className="tabHeaderItem" data-id="1">
                  Go
              </li>
              <li className="tabHeaderItem" data-id="2">
                  Python
              </li>
              <li className="tabHeaderItem" data-id="3">
                  C
              </li>
              <li className="tabHeaderItem" data-id="4">
                  Javascript
              </li>
            </ul>

            <div>
              <div className="tabContentItem active">
                <pre>
                  <code>
                    {_.replace(
                        Prism.highlight(
                          decodeURIComponent(snippets[0].content),
                          Prism.languages.bash,
                        ),
                        'undefinedundefined',
                        '&lt;HOST&gt;:&lt;PORT&gt;',
                      )}
                  </code>
                </pre>
              </div>

              <div className="tabContentItem">
                <pre>
                  <code>
                    {_.replace(
                        Prism.highlight(
                          decodeURIComponent(snippets[1].content),
                          Prism.languages.go,
                        ),
                        'undefinedundefined',
                        '&lt;HOST&gt;:&lt;PORT&gt;',
                      )}
                  </code>
                </pre>
              </div>

              <div className="tabContentItem">
                <pre>
                  <code>
                    {_.replace(
                        Prism.highlight(
                          decodeURIComponent(snippets[2].content),
                          Prism.languages.python,
                        ),
                        'undefinedundefined',
                        '&lt;HOST&gt;:&lt;PORT&gt;',
                      )}
                  </code>
                </pre>
              </div>

              <div className="tabContentItem">
                <pre>
                  <code>
                    {_.replace(
                        Prism.highlight(
                          decodeURIComponent(snippets[3].content),
                          Prism.languages.clike,
                        ),
                        'undefinedundefined',
                        '&lt;HOST&gt;:&lt;PORT&gt;',
                      )}
                  </code>
                </pre>
              </div>

              <div className="tabContentItem">
                <pre>
                  <code>
                    {_.replace(
                        Prism.highlight(
                          decodeURIComponent(snippets[4].content),
                          Prism.languages.javascript,
                        ),
                        'undefinedundefined',
                        '&lt;HOST&gt;:&lt;PORT&gt;',
                      )}
                  </code>
                </pre>
              </div>
            </div>
          </div>
                          </div>);
      });
    });

    return <p>{pageContents}</p>;
  }
}
