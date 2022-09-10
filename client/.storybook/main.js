module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  features: { emotionAlias: false },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  babel: async (options) => {
    options.overrides.push({
      presets: [
        [
          '@babel/preset-react',
          { runtime: 'automatic', importSource: '@emotion/react' },
        ],
      ],
      plugins: ['@emotion/babel-plugin'],
      test: '*',
    });

    return options;
  },
};
