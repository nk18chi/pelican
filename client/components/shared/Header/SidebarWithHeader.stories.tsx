import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarWithHeader } from '.';

export default {
  title: 'Components/shared/Header/SidebarWithHeader',
  component: SidebarWithHeader,
  argTypes: {},
} as ComponentMeta<typeof SidebarWithHeader>;

const Template: ComponentStory<typeof SidebarWithHeader> = (args) => (
  <SidebarWithHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <p>CHILDREN</p>,
};
