module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
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
