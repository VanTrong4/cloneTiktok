const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'rgb(254 44 85)',
                          '@slider-handle-color-focus-shadow': 'rgb(197 198 201)'
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};