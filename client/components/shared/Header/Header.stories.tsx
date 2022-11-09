import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Components/shared/Header/Simple',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
