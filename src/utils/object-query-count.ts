import { isNil as _isNil, isObjectLike as _isObjectLike } from 'lodash';

/**
 * Queryが１つか否かのチェック
 */
export function getQueryCount(mapRequest: any): number {
  let count = 0;
  for (let q of Object.entries(mapRequest)) {
    if (!_isNil(q[1])) {
      count++;
    }
  }

  return count;
}
