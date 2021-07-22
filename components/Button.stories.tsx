import React from 'react';

import { Button } from './Button';

const colors = {
  blue: {
    bg: 'bg-blue-default',
    bgHover: 'hover:bg-blue-hover',
    bgActive: 'active:bg-blue-active',
  },
  red: {
    bg: 'bg-red-default',
    bgHover: 'hover:bg-red-hover',
    bgActive: 'active:bg-red-active',
  },
};

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'sm',
  bgColor: colors.blue.bg,
  hover: colors.blue.bgHover,
  active: colors.blue.bgActive,
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  size: 'md',
  bgColor: colors.red.bg,
  hover: colors.red.bgHover,
  active: colors.red.bgActive,
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: 'lg',
  bgColor: colors.blue.bg,
  hover: colors.blue.bgHover,
  active: colors.blue.bgActive,
};

export const MediumButtonWithIcon = Template.bind({});
MediumButtonWithIcon.args = {
  size: 'md',
  isIcon: true,
  bgColor: colors.red.bg,
  hover: colors.red.bgHover,
  active: colors.red.bgActive,
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  size: 'lg',
  isIcon: true,
  isOutline: true,
  hover: colors.blue.bgHover,
  active: colors.blue.bgActive,
};
