import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'lerna-dumi-react-component',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@zxy/mom-module': resolve(
      __dirname,
      './packages/mom-module/src/index.tsx',
    ),
  },
  resolve: {
    includes: ['docs', 'packages/mom-module/src'],
  },
  locales: [['zh-CN', '中文']],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitLab',
        path: '',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitLab',
        path: '',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
