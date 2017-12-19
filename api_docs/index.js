import fs from 'fs-extra';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';
import request from 'async-request';
import SwaggerParser from 'swagger-parser';

import RootComponent from './components/index';

const configuration = require('./config.json');

function generateSpecPage(config) {
  const swaggerSpecLink = config.SPEC_ENDPOINT;
  const documentTitle = config.TITLE;
  const targets = ['shell_curl', 'go_native', 'python_python3', 'c_libcurl', 'javascript_xhr'];

  const parseSwagger = async body =>
    new Promise((resolve, reject) => {
      SwaggerParser.parse(JSON.parse(body), (err, spec) => {
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
        ReactDOMServer.renderToString(<RootComponent swaggerSpec={spec} targets={targets} title={documentTitle} />),
      );
      console.log('path:', path.join(__dirname, `build/${config.PATH}/index.html`));
      fs.writeFileSync(path.join(__dirname, `build/${config.PATH}/index.html`), renderedHtml);
      console.log('File written successfully');
    } catch (err) {
      console.error(err);
    }
  };

  index();
}

_.forEach(configuration.specs, generateSpecPage);
