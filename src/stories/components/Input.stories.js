import React from 'react';
import InputField from '../../components/input';

export default {
    title: 'Example/Inputfield',
    component: InputField
};

const Template = (args) => (
    <InputField
        {...args}/>
)

export const Inputfield_ = Template.bind({});

Inputfield_.args = {
    label: 'Input field',
    placeholder: 'Input text',
    color: 'primary',
    width: 300
}