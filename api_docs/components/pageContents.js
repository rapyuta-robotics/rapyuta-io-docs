import React from 'react';
import _ from 'lodash';

import Parameter from './parameterItem';
import RequestBody from './requestBody';
// import Parameters from './parameters';
import ResponseBody from './responseBody';
import CodeSnippets from './codeSnippets';

const Contents = ({
  spec,
  swaggerSpec: {
    paths,
    schemes,
    host,
    definitions,
  },
}) => {
  const pageContents = _.map(spec, (resultSpecItem, specKey) =>
    _.map(resultSpecItem, (resultItem) => {
      const {
        method, description, url, snippets,
      } = resultItem;
      const params = _.groupBy(paths[specKey][method.toLowerCase()].parameters, 'in');

      return (
        <div className="apiItem" id={`${method}_${specKey}`}>
          <h3 className="apiItemHead">
            <span className={`methodSpan ${method.toLowerCase()}`}>{method}</span>
            {specKey}
          </h3>

          <p className="apiDetails">
            {_.replace(url, `${schemes[0]}://${host}`, '<HOST>:<PORT>')}
            <br />
            {description}
          </p>

          <p>
            {
              _.has(params, 'path') && (
                <Parameter paramArray={params.path} paramType="Path" />
              )
            }
            {
              _.has(params, 'query') && (
                <Parameter paramArray={params.query} paramType="Query" />
              )
            }
            {
              _.has(params, 'header') && (
                <Parameter paramArray={params.header} paramType="Header" />
              )
            }
            {
              _.has(params, 'body') && (
                <div>
                  <h3>Body params</h3>
                  <div className="paramBody">
                    <RequestBody paramArray={params.body} definitions={definitions} />
                  </div>
                </div>
              )
            }
          </p>

          <h3>Responses</h3>
          <ResponseBody
            definitions={definitions}
            responses={paths[specKey][method.toLowerCase()].responses}
          />

          <h3>Code snippets</h3>
          <CodeSnippets snippets={snippets} />
        </div>
      );
    }));

  return <p>{pageContents}</p>;
};

export default Contents;
