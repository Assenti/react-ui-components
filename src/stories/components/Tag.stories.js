import React from 'react';
import Tag from '../../components/tag';

export default {
    title: 'Example/Tag',
    component: Tag
};

const Template = (args) => (
    <Tag 
        {...args}>
        Price: 1000
    </Tag>
)

export const Tag_ = Template.bind({});

Tag_.args = {
    color: 'yellow'
}