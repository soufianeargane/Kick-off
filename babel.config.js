module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { modules: false }],
      'babel-preset-expo'
    ],
    plugins: ["nativewind/babel"],
  };
};
