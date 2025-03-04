'use strict';

// Merge two dictionaries

const merge = (object1 = {}, object2 = {}) => {
  const object3 = { ...object1 };
  const keys2 = Object.keys(object2);
  for (const key of keys2) {
    if (!(key in object3))
      object3[key] = object2[key];
  }
  return object3;
};

const result = merge({ a: 'uno', b: 'due' }, { c: 'tre' });
console.log(result);

/* Also this function can be replaced with
const result = { ...{ a: 'uno', b: 'due' }, ...{ a: 'uno', c: 'tre' } }; */
