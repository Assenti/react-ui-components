import React from 'react';
import RadioGroup from '../../components/radio';

export default {
  title: 'Example/Radiogroup',
  component: RadioGroup
};

const Template = (args) => (
    <RadioGroup
        {...args} 
        options={['Washington, D.C.', 'New York City', 'Chicago', 'Boston', 'San Francisco', 'Los Angeles']}/>
)

export const Radiogroup_ = Template.bind({});

Radiogroup_.args = {
    color: 'primary',
    name: 'city',
    vertical: true
};