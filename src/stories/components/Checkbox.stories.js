import React from 'react';
import Checkbox from '../../components/checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox
};

const Template = (args) => (
    <Checkbox {...args}/>
)

export const Checkbox_ = Template.bind({});
Checkbox_.args = {
    color: 'primary',
    checked: true,
    label: 'Checkbox',
    size: 'default',
    fill: true
};