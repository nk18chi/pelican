import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Components/shared/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  isName: true,
};
