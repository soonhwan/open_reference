module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@storybook/preset-create-react-app',
    // {
    //   name: '@storybook/addon-docs',
    //   options: { configureJSX: true },
    // },
  ],
}
