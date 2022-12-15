export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    [
      'transform-remove-console',
      {
        exclude: ['error', 'warn'],
      },
    ],
  ],
};
