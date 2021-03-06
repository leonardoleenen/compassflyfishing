import { Config } from '@stencil/core';
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'flicktrip-webcomponents',
  plugins: [
    sass({ 
      includePaths: ['/node_modules'],
      injectGlobalPaths: [
        'src/globals/variables.scss',
      ]
     })
  ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
