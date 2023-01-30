import merge from 'lodash/merge';

const mergeObjects = (...source: any[]) => merge({}, ...source);
export default mergeObjects;