import { isReserved, isPlainObject } from './util/index';
import { observe } from './observer/index';

export function initState(vm) {
  vm._watchers = [];
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);
  if (opts.data) {
    initData(vm);
  } else {
    observe((vm._data = {}), true /* asRootData */);
  }
}

// 代理别名访问
// get => this._data.a
// set => this._data.a = a
export function proxy(target, sourceKey, key) {
  Object.defineProperty(target, key, {
    get() {
      return this[sourceKey][key];
    },
    set(val) {
      this[sourceKey][key] = val;
    },
  });
}

function initProps(vm, propsOptions) {}

function initData(vm) {
  let { data } = vm.$options;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'product'
      && console.warn('data functions should return an object:\n');
  }

  const keys = Object.keys(data);
  let i = keys.length;

  while (i--) {
    const key = keys[i];

    // 需要排除保留字$_
    if (!isReserved(key)) {
      // 代理别名访问_data
      proxy(vm, '_data', key);
    }
  }

  // 真正的代理响应式
  observe(data, true);
}

function getData(data, vm) {
  try {
    return data.call(vm, vm);
  } catch (e) {
    console.error(e);
    return {};
  }
}
