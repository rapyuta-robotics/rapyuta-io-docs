import fs from 'fs-extra';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';
import request from 'async-request';
import Prism from 'prismjs';
import SwaggerSnippet from 'swagger-snippet';
import SwaggerParser from 'swagger-parser';

import RootComponent from './components/index';

require('./script/prism-bash');
require('./script/prism-go');
require('./script/prism-python');
require('./script/prism-clike');
require('./script/prism-javascript');

const config = require('./config.json');

const swaggerSpecLink = config.SPEC_ENDPOINT;
const targets = ['shell_curl', 'go_native', 'python_python3', 'c_libcurl', 'javascript_xhr'];

// const schemaTypesToPlaceholder = {
//   object: '{}',
//   string: '"string"',
//   array: '[]',
//   boolean: '"boolean"',
//   integer: '"integer"'
// };

// const formatParams = (paramArray, paramType) => {
//   let paramString = `<h3>${paramType} params</h3>
//   <div class="paramBody">`;
//   _.each(paramArray, (paramItem) => {
//     paramString += `<div class="paramBodyItem">
//         <div class="paramName">
//             ${paramItem.name}
//             <div class="paramRequired">
//             ${paramItem.required ? 'required' : ''}
//             </div>
//         </div>
//         <div class="paramType">${paramItem.type}
//             <div class="paramDescription">
//             ${paramItem.description || ''}
//             </div>
//         </div>
//     </div>`;
//   });
//   paramString += '</div>';
//   return paramString;
// };

// const multiplyTag = (tag, times = 1) => _.join(_.times(times, tag),'');

// const getBodyParamsSchemaJson = (schemaProperties, tab) => {
//   let paramString = '';
//   if (_.has(schemaProperties, 'properties')) {
//     _.each(schemaProperties.properties, (schemaItem, schemaIndex) => {
//       if (schemaItem.type === 'array') {
//         paramString +=
//           multiplyTag('&emsp;', tab) +
//           schemaIndex +
//           ' : ' +
//           '&emsp;[' +
//           '<br />' +
//           getBodyParamsSchemaJson(schemaItem.items, tab ? tab + 1 : 2) +
//           multiplyTag('&emsp;', tab) +
//           ']' +
//           ',<br />';
//       } else if (schemaItem.type === 'object') {
//         paramString +=
//           multiplyTag('&emsp;', tab) +
//           schemaIndex +
//           ' : ' +
//           '&emsp;{' +
//           '<br />' +
//           getBodyParamsSchemaJson(schemaItem, tab ? tab + 1 : 2) +
//           multiplyTag('&emsp;', tab) +
//           '}' +
//           ',<br />';
//       } else {
//         paramString +=
//           multiplyTag('&emsp;', tab) +
//           schemaIndex +
//           ' : ' +
//           schemaTypesToPlaceholder[schemaItem.type] +
//           ',<br />';
//       }
//     });
//   } else if (schemaProperties.type === 'array') {
//     paramString += '&emsp;[' + schemaTypesToPlaceholder[schemaProperties.items.type] + '],<br />';
//   }
//   return paramString;
// };
//
// const formatBodyParams = (paramArray, paramType) => {
//   if (_.has(paramArray[0], 'schema')) {
//     let paramString = `<h3>${paramType} params</h3>
//     <div class="paramBody">`;
//     _.each(paramArray, (paramItem) => {
//       paramString += `<div class="paramBodyItem">
//             <div class="paramName">
//                 ${paramItem.name}
//                 <div class="paramRequired">
//                     ${paramItem.required ? 'required' : ''}
//                 </div>
//             </div>
//             <div class="paramType">
//                 json
//                 <div class="paramDescription">
//                     ${paramItem.description || ''}
//                     <br />
//                     {   <br />
//                         ${getBodyParamsSchemaJson(paramArray[0].schema)}
//                     }
//                 </div>
//             </div>
//         </div>`;
//     });
//     paramString += '</div>';
//     return paramString;
//   }
//   return formatParams(paramArray, paramType);
// };

// const swaggerSuccessCallback = (swaggerSpec) => {
//   const results = _.groupBy(SwaggerSnippet.getSwaggerSnippets(swaggerSpec, targets), (item) => {
//     return _.replace(
//       item.url,
//       `${swaggerSpec.schemes[0]}://${swaggerSpec.host}`,
//       ''
//     );
//   });
//   let sidebarHtml = '';
//   let pageContentsHtml = '';
//
//   _.each(results, (resultSpecItem, specKey) => {
//     _.each(resultSpecItem, (resultItem) => {
//       const {
//         method,
//         description,
//         url,
//         snippets,
//       } = resultItem;
//       const params = _.groupBy(swaggerSpec.paths[specKey][method.toLowerCase()].parameters, 'in');
//       sidebarHtml += `<li>
//             <a href="#${method}_${specKey}">
//                 <span class="methodSpan ${method.toLowerCase()}">
//                   ${method}
//                 </span>
//                 ${specKey}
//             </a>
//         </li>`;
//       pageContentsHtml += `<div class="apiItem" id="${method}_${specKey}">
//             <h3 class="apiItemHead">
//                 <span class="methodSpan ${method.toLowerCase()}">${method}</span>
//                 ${specKey}
//             </h3>
//
//             <p class="apiDetails">
//
//                 ${_.replace(
//                   url,
//                   `${swaggerSpec.schemes[0]}://${swaggerSpec.host}`,
//                   '&lt;HOST&gt;:&lt;PORT&gt;'
//                 )}
//                 <br />
//                 ${description}
//
//             </p>
//
//             <p>
//
//                 ${_.has(params, 'path') ? formatParams(params.path, 'Path') : ''}
//                 ${_.has(params, 'query') ? formatParams(params.query, 'Query') : ''}
//                 ${_.has(params, 'body') ? formatBodyParams(params.body, 'Body') : ''}
//
//             </p>
//
//             <div class="apiCodeEmbed">
//                 <ul>
//                     <li class="tabHeaderItem active" data-id="0">Shell</li>
//                     <li class="tabHeaderItem" data-id="1">Go</li>
//                     <li class="tabHeaderItem"  data-id="2">Python</li>
//                     <li class="tabHeaderItem"  data-id="3">C</li>
//                     <li class="tabHeaderItem"  data-id="4">Javascript</li>
//                 </ul>
//
//                 <div>
//                     <div class="tabContentItem active">
//                         <pre><code>${_.replace(
//                           Prism.highlight(
//                             decodeURIComponent(snippets[0].content),
//                             Prism.languages.bash
//                           ),
//                           'undefinedundefined',
//                           '&lt;HOST&gt;:&lt;PORT&gt;'
//                         )}</code></pre>
//                     </div>
//
//                     <div class="tabContentItem">
//                         <pre><code>${_.replace(
//                           Prism.highlight(
//                             decodeURIComponent(snippets[1].content),
//                             Prism.languages.go
//                           ),
//                           'undefinedundefined',
//                           '&lt;HOST&gt;:&lt;PORT&gt;'
//                         )}</code></pre>
//                     </div>
//
//                     <div class="tabContentItem">
//                         <pre><code>${_.replace(
//                           Prism.highlight(
//                             decodeURIComponent(snippets[2].content),
//                             Prism.languages.python
//                           ),
//                           'undefinedundefined',
//                           '&lt;HOST&gt;:&lt;PORT&gt;'
//                         )}</code></pre>
//                     </div>
//
//                     <div class="tabContentItem">
//                         <pre><code>${_.replace(
//                           Prism.highlight(
//                             decodeURIComponent(snippets[3].content),
//                             Prism.languages.clike
//                           ),
//                           'undefinedundefined',
//                           '&lt;HOST&gt;:&lt;PORT&gt;'
//                         )}</code></pre>
//                     </div>
//
//                     <div class="tabContentItem">
//                         <pre><code>${_.replace(
//                           Prism.highlight(
//                             decodeURIComponent(snippets[4].content),
//                             Prism.languages.javascript
//                           ),
//                           'undefinedundefined',
//                           '&lt;HOST&gt;:&lt;PORT&gt;'
//                         )}</code></pre>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//     });
//   });
//   return {
//     sidebarHtml: sidebarHtml,
//     pageContentsHtml: pageContentsHtml,
//   };
// };

const parseSwagger = async body =>
  new Promise((resolve, reject) => {
    SwaggerParser.validate(JSON.parse(body), (err, spec) => {
      if (err) {
        reject({
          success: false,
          err,
        });
      } else {
        resolve({
          success: true,
          spec,
        });
      }
    });
  });

const index = async () => {
  try {
    // Copy src to build
    fs.copySync(path.join(__dirname, 'src'), path.join(__dirname, 'build'));
    console.log('Copied src folder to build');

    console.log('Swagger spec link', swaggerSpecLink);

    // Get swagger spec from url
    const { statusCode, error, body } = await request(swaggerSpecLink, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if ([200, 201].indexOf(statusCode) < 0) {
      console.log('Swagger spec call status code not 200, 201');
      return;
    }
    if (error) {
      console.error(`Error getting swagger spec: ${error}`);
      return;
    }

    // Parse swagger spec json
    const { err, spec, success } = await parseSwagger(body);
    if (!success) {
      console.error(`Error in parsing swagger: ${err}`);
      return;
    }

    // Read source template
    const templateContents = fs.readFileSync(
      path.join(__dirname, 'src/index_template.html'),
      'utf8',
    );

    // Replace source template with rendered React components string
    const renderedHtml = _.replace(
      templateContents,
      '<!-- root_component_mount -->',
      ReactDOMServer.renderToString(<RootComponent swaggerSpec={spec} targets={targets} />),
    );
    console.log('path:', path.join(__dirname, 'build/index.html'));
    fs.writeFileSync(path.join(__dirname, 'build/index.html'), renderedHtml);
    console.log('File written successfully');
    // const swaggerHtml = swaggerSuccessCallback(api);
  } catch (err) {
    console.error(err);
  }
};

index();
