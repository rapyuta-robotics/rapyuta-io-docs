function buildSchema(spec) {
  const paths = spec.paths;
  const pathKeys = Object.keys(paths);

  const output = pathKeys.map(path => {
    const methods = Object.keys(paths[path]);
    return methods.map(method => {
      const request = {
        path: path,
        method: method,
        header: {},
        body: {}
      };

      const methodObj = paths[path][method];

      if (methodObj.parameters) {
        const parameters = methodObj.parameters;
        parameters.forEach((parameter, idx) => {
          if (parameter.in && parameter.name && parameter.type) {
            if (!request[parameter.in]) {
              request[parameter.in] = {};
              console.log('new parameter found');
            }
            request[parameter.in][parameter.name] = parameter.type;
          } else {
            console.log(
              `anomaly found in 
              path: ${path} 
              method: ${method}
              index: ${idx}`
            );
          }
        });
      }

      return request;
    });
  });

  return output;
}
