import _ from 'lodash';

const schemaTypesToPlaceholder = {
  object: '{}',
  string: 'string',
  array: '[]',
  boolean: 'boolean',
  integer: 'integer',
};

const getBodyParams = (schema) => {
  const params = {};

  if (_.has(schema, 'properties')) {
    _.each(schema.properties, (schemaItem, schemaIndex) => {
      if (schemaItem.type === 'array') {
        params[schemaIndex] = getBodyParams(schemaItem.items);
      } else if (schemaItem.type === 'object') {
        params[schemaIndex] = getBodyParams(schemaItem);
      } else {
        params[schemaIndex] = schemaTypesToPlaceholder[schemaItem.type];
      }
    });
  } else if (schema.type === 'array') {
    return [schemaTypesToPlaceholder[schema.items.type]];
  }
  return params;
};

export default getBodyParams;
