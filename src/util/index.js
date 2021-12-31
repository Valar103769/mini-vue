/**
 * data() 的返回值
 * @param {*} obj
 * @returns Boolean
 */
export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * Check if a string starts with $ or _
 */
export function isReserved(str) {
  const c = (`${str}`).charCodeAt(0);
  return c === 0x24 || c === 0x5f;
}

export function isObject(object) {
  return typeof object === 'object' && object !== null;
}
