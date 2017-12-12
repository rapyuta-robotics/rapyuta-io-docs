import React, { Component } from 'react';

export default class ResponseBody extends Component {
  render() {
    const { responses } = this.props;
    const responseCodes = Object.keys(responses);
    const result = [];

    for (const code in responseCodes) {
      result.push(<div className="paramBodyItem">
        <div className="paramName">
            status
          <div className="paramRequired" />
        </div>
        <div className="paramType">
          {responseCodes[code]}
          <div className="paramDescription">
            <pre>
              <code>{JSON.stringify(responses[responseCodes[code]], null, 2)}</code>
            </pre>
          </div>
        </div>
                  </div>);
    }

    return (
      <div>
        <h3>Responses</h3>
        {result}
      </div>
    );
  }
}
