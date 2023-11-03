module.exports = {
    plugins: [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env'),
      require('postcss-nested'),
      require('postcss-mixins'),
      require('autoprefixer'),
      require('stylelint'),
      require('postcss-reporter'),
      require('css-nano'),({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
    ],
  };
  