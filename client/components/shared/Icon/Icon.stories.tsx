import { ComponentStory, ComponentMeta } from '@storybook/react';

import StatsIcon from './StatsIcon';

export default {
  title: 'Components/shared/Icon',
  component: StatsIcon,
  argTypes: {},
} as ComponentMeta<typeof StatsIcon>;

const Template: ComponentStory<typeof StatsIcon> = (args) => (
  <StatsIcon {...args} />
);

export const statsIcon = Template.bind({});
