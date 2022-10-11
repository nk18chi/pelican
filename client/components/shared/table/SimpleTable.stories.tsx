import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleTable from './SimpleTable';

export default {
  title: 'Components/shared/SimpleTable',
  component: SimpleTable,
  argTypes: {},
} as ComponentMeta<typeof SimpleTable>;

const Template: ComponentStory<typeof SimpleTable> = (args) => (
  <SimpleTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  thead: [
    { _id: '1', label: 'Profile' },
    { _id: '2', label: 'Phone' },
    { _id: '3', label: 'Plan' },
    { _id: '4', label: 'Last Invoice' },
    { _id: '5', label: 'CreatedAt' },
  ],
  tbody: [
    {
      link: '/customer/1',
      tds: [
        <div key={1}>1.1</div>,
        <div key={2}>1.2</div>,
        <div key={3}>1.3</div>,
        <div key={4}>1.4</div>,
        <div key={5}>1.5</div>,
      ],
    },
    {
      link: '/customer/2',
      tds: [
        <div key={1}>2.1</div>,
        <div key={2}>2.2</div>,
        <div key={3}>2.3</div>,
        <div key={4}>2.4</div>,
        <div key={5}>2.5</div>,
      ],
    },
  ],
};
