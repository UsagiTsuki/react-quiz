import { isNil as _isNil, isObjectLike as _isObjectLike } from 'lodash';
/**
 * オブジェクトマッピングサービス
 */
export function doMapping(org: any, dest: any): void {
  if (_isNil(org) || !_isObjectLike(org)) {
    return;
  }
  for (let key of Object.keys(org)) {
    dest[key] = org[key];
  }
}
