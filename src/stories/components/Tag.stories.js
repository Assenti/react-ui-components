import React from 'react';
import Tag from '../../components/tag';

export default {
    title: 'Example/Tag',
    component: Tag
};

const Template = (args) => (
    <Tag 
        {...args}>
        {args.children}
    </Tag>
)

export const Tag_ = Template.bind({});

Tag_.args = {
    color: 'yellow',
    children: 'Price: 1000',
    borderType: 'default'
}