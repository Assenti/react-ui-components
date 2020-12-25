import React from 'react';
import TextareaField from '../../components/textarea';

export default {
    title: 'Example/Textareafield',
    component: TextareaField
};

const Template = (args) => (
    <TextareaField
        {...args}/>
)

export const Textareafield_ = Template.bind({});

Textareafield_.args = {
    placeholder: 'Input text...',
    maxRows: 20,
    color: 'primary',
    rows: 4,
    width: 300,
    label: 'Textarea field'
};