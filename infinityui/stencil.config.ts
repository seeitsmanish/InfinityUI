import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

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
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../infinityui-react/src/components/stencil-generated/',
    }),
    // dist-custom-elements output target is required for the React output target
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
  ],
  testing: {
    browserHeadless: "new",
  }
};