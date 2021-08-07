import React from 'react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button Secondary'
}

export const Link = Template.bind({});
Link.args = {
  label: 'Link',
  href: '#',
  type: 'a'
}