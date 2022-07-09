import { each, isObject } from 'lodash';

/**
 * 
 * @param a object with  properties to compare
 * @param b base object to compare against
 * @returns object with properties that have changed in @param a
 */

type obj = { [key: string]: any };

export function objectChanges(a: obj, b: obj): obj {
  const r: obj = {};
  each(a, function(v,k) {
      if(b[k] === v) return;
      r[k] = isObject(v)
              ? objectChanges(v, b[k])
              : v
          ;
      });
  return r;
}