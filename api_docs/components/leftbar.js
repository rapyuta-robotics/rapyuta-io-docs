import React, { Component } from 'react';
import _ from 'lodash';

class Leftbar extends Component {
  render() {
    const { swaggerSpec, spec } = this.props;
    const sidebarArray = [];

    _.each(spec, (resultSpecItem, specKey) => {
      _.each(resultSpecItem, (resultItem) => {
        const {
          method, description, url, snippets,
        } = resultItem;

        const params = _.groupBy(swaggerSpec.paths[specKey][method.toLowerCase()].parameters, 'in');

        sidebarArray.push(<li>
          <a href={`#${method}_${specKey}`}>
            <span className={`methodSpan ${method.toLowerCase()}`}>{method}</span>
            {specKey}
          </a>
                          </li>);
      });
    });

    return <p>{sidebarArray}</p>;
  }
}

export default Leftbar;
