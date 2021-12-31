import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: './src/index.js',
  output: {
    file: 'dist/vue.js',
    format: 'umd',
    name: 'Vue',
    sourcemap: true,
  },
  plugins: [
    // es6 转 es5, 不配置将是 es6
    babel({
      exclude: './node_modules/**',
    }),
    nodeResolve(),
  ],
};
