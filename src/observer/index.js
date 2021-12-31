// [!] Error: Could not resolve '../util' from src/observer/index.js

// 安装 @rollup-plugin-node-resolve 还是的写到/index
import { isObject, isPlainObject } from '../util';

export function observe(value, asRootData) {
  if (!isObject(value)) return;

  let ob;
  // 做一些边界判断, 非核心逻辑
  if (value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
    // 缓存优先
    ob = value.__ob__;
  } else if (Array.isArray(value) || isPlainObject(value)) {
    // 参数校验
    ob = new Observer(value);
  }

  // 统计有多少个响应式的 vm实例
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 *
 * @param {*} value  使用类,为了利用 instanceof 操作符来判断是否是真正的代理对象
 */
function Observer(value) {}

export function defineReactive() {}
