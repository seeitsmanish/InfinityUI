import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
export const config: Config = {
  namespace: 'infinityui',
  globalStyle: 'src/styles/global.scss',
  plugins: [
    sass(),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      outDir: '../infinity-ui-next-app/app/components/stencil-generated', // Adjust this path to your Next.js app
    }),
    {
      type: 'dist-custom-elements',
    },

  ],
  testing: {
    browserHeadless: "new",
  },
};
