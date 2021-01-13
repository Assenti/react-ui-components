import React from 'react';
import RadioGroup from '../../components/radio';

export default {
  title: 'Example/Radiogroup',
  component: RadioGroup
};

const Template = (args) => (
    <RadioGroup
        {...args}/>
)

export const Radiogroup_ = Template.bind({});

Radiogroup_.args = {
    value: '',
    color: 'primary',
    name: 'city',
    vertical: true,
    size: 'default',
    options: ['Washington, D.C.', 'New York City', 'Chicago', 'Boston', 'San Francisco', 'Los Angeles']
};