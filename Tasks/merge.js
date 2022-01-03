'use strict';

// Merge two dictionaries

const merge = (object1, object2) => {
  const object3 = { ...object1 };
  const keys2 = Object.keys(object2);
  for (const key of keys2) {
    object3[key] = object2[key];
  }
  return object3;
};

const result = merge({ a: 'uno', b: 'due' }, { c: 'tre' });
console.log(result);
