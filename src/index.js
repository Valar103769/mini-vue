import { initMixin } from './init';

function Vue(options) {
  this._init(options);
}

// 添加原型方法
initMixin(Vue);

export default Vue;
