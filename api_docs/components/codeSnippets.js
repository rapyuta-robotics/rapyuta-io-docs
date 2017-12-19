import React from 'react';
import _ from 'lodash';
import Prism from 'prismjs';
import classnames from 'classnames';

import '../script/prism-bash';
import '../script/prism-go';
import '../script/prism-python';
import '../script/prism-clike';
import '../script/prism-javascript';

const snippetLanguages = [
  {
    name: 'Shell',
    prismKey: 'bash',
  },
  {
    name: 'Go',
    prismKey: 'go',
  },
  {
    name: 'Python',
    prismKey: 'python',
  },
  {
    name: 'C',
    prismKey: 'clike',
  },
  {
    name: 'Javascript',
    prismKey: 'javascript',
  },
];

const CodeSnippets = ({ snippets }) => (
  <div className="apiCodeEmbed">
    <ul>
      {
        _.map(snippetLanguages, (
          { name },
          index,
        ) => (
          <li
            className={classnames({
              tabHeaderItem: true,
              active: (index === 0),
            })}
            data-id={index}
          >
            {name}
          </li>
        ))
      }
    </ul>

    <div>
      {
        _.map(snippetLanguages, (
          { prismKey },
          index,
        ) => (
          <div
            className={classnames({
              tabContentItem: true,
              active: (index === 0),
            })}
          >
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    decodeURIComponent(snippets[index].content),
                    Prism.languages[prismKey],
                  ),
                }}
              />
            </pre>
          </div>
        ))
      }
    </div>
  </div>
);

export default CodeSnippets;
