module.exports = {
  babelrcRoots: ['./', 'packages/components/*', 'packages/*'],
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    ['@babel/preset-env', { loose: true }],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-modules-commonjs',
  ],
}
