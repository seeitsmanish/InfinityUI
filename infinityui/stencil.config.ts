import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'infinityui',
  globalStyle: 'src/styles/global.scss',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'styles' } // Copy styles directory to dist
      ]
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
      footer: '*Built with InfinityUI*'
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: 'styles' }
      ]
    }
  ],
  testing: {
    browserHeadless: "new",
  }
};