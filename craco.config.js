const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#0C0474',
              '@badge-height' : '14px',
              '@badge-color': '#ff0000',
              '@font-size':'16px'
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};