// 约定 Prototype.init 作为单独的文件,以init为文件名
import { initState } from './state';
import { initLifecycle, callHook } from './lifecycle';

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;
    vm._isVue = true;
    vm.$options = options || {};

    initLifecycle(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}
