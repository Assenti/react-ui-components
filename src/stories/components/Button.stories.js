import React from 'react';
import Button from '../../components/button';

export default {
  title: 'Example/Button',
  component: Button
};

const Template = (args) => (
  <>
    <Button {...args}/>
  </>
)

export const Button_ = Template.bind({});

Button_.args = {
    color: 'primary',
    name: 'Button',
}