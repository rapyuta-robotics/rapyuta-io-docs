import _ from 'lodash';

const schemaTypesToPlaceholder = {
  object: '{}',
  string: 'string',
  array: '[]',
  boolean: 'boolean',
  integer: 'integer',
};

const getBodyParams = (schema, definitions) => {
  if (!schema) {
    return '';
  }
  if (_.has(schema, '$ref')) {
    return getBodyParams(
      _.get(definitions, _.replace(schema.$ref, '#/definitions/', '')),
      definitions,
    );
  }
  const params = {};
  if (_.has(schema, 'properties')) {
    _.each(schema.properties, (schemaItem, schemaIndex) => {
      if (schemaItem.type === 'array') {
        params[schemaIndex] = getBodyParams(schemaItem.items, definitions);
      } else if (schemaItem.type === 'object') {
        params[schemaIndex] = getBodyParams(schemaItem, definitions);
      } else {
        params[schemaIndex] = schemaTypesToPlaceholder[schemaItem.type];
      }
    });
  } else if (schema.type === 'array' && _.has(schema, 'items')) {
    return [getBodyParams(schema.items, definitions)];
  } else if (schema.type) {
    return schemaTypesToPlaceholder[schema.type];
  }
  return params;
};

export default getBodyParams;
